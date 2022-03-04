import  { dashboardActions, RankingByCity } from "./DashBoardSlice";
import {  takeLatest , all , call ,put} from 'redux-saga/effects'
import studentApi from "api/studentApi";
import { City, ListResponse, Student } from "models";
import cityApi from "api/cityApi";

function* fetchStatictics(){
   const responseList:ListResponse<Student>[] = yield all([
        yield call(studentApi.getAll ,{  _page : 1 , _limit:1 , gender: 'male' }),
        yield call(studentApi.getAll ,{  _page : 1 , _limit:1 , gender: 'female' }),
        yield call(studentApi.getAll ,{  _page : 1 , _limit:1 , mark_gte :  8 }),
        yield call(studentApi.getAll ,{  _page : 1 , _limit:1 , mark_lte: 5 }),
   ])
   const rs = responseList.map(item => item.pagination._totalRows) ; //[12,21,3,4]
   const [maleCount , femaleCount , highMarkCount , lowMarkCount]  = rs ;
   yield put(dashboardActions.setStatisticsList({
       maleCount , femaleCount , highMarkCount , lowMarkCount
   }))     
}
function* fetchHighestStudentList(){
       const resp : ListResponse<Student> = yield call(studentApi.getAll , { 
           _limit : 5 ,
           _page : 1  , 
            _sort : 'mark', 
            _order: 'desc'
        })
       yield put(dashboardActions.setHighestStudentList(resp.data) );
}
function* fetchLowestStudentList(){
    const {data  }: ListResponse<Student> = yield call(studentApi.getAll , { 
         _limit : 5 ,
         _page : 1  , 
         _sort : 'mark', 
         _order: 'asc'
     })
    yield put(dashboardActions.setLowestStudentList(data) );
}
function* fetchRankingByCityList(){
    //fetch city list 
    const {data : cityList} : ListResponse<City> = yield call(cityApi.getAll)
    //fetch ranking per city 
    const callList = yield cityList.map(cityItem => 
            call(studentApi.getAll ,{  
                _page : 1 ,
                _limit: 5 , 
                _sort:'mark',
                _order: 'desc',
                city : cityItem.code
          })
    )
    const responseList : any = yield all(callList) ;

   // console.log("responseList",responseList)
    
    const rankingByCityList : Array<RankingByCity> = responseList.map( (item:any,idx:number) => {
        return {
            cityId : cityList[idx].code,
            cityName : cityList[idx].name ,
            rankingList: item.data
        }
    })
    
     //console.log("rankingByCityList",rankingByCityList)
     yield put(dashboardActions.setRankingByCityList(rankingByCityList))
}
function* fetchDashBoardData(){
    try{
        yield all([
            call(fetchStatictics),
            call(fetchHighestStudentList),
            call(fetchLowestStudentList),
            call(fetchRankingByCityList),
        ]);

        yield put(dashboardActions.fetchDataSuccess())
     //   yield call(fetchCityList)
    }catch(err){
        //console.log("Fail to fetch dashboard data ", err);
    }
} 

export default function* dashBoardSaga() {
    yield  takeLatest( dashboardActions.fetchData.type , fetchDashBoardData)
}