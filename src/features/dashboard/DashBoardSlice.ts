import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { Student } from "models";

export interface DashBoardStatistics {
    maleCount : number ;
    femaleCount : number ;
    highMarkCount : number ;
    lowMarkCount : number ;
}
export interface RankingByCity {
    cityId : string ;
    cityName: string ;
    rankingList : Student[] 
}
export interface DashBoardState {
    loading : boolean ,
    statistics : DashBoardStatistics , 
    highestStudentList : Student[] ,
    lowestStudentList : Student[] ,
    rankingByCityList :  RankingByCity[]
}

const initialState :DashBoardState={
    loading: false ,
    statistics : {
        maleCount : 0 ,
        femaleCount : 0 ,
        highMarkCount : 0 ,
        lowMarkCount : 0 
    },
    highestStudentList : [],
    lowestStudentList: [],
    rankingByCityList: []
}
const dashboardSlice = createSlice({
    name : 'dashboard' , 
    initialState ,
    reducers : {    
        fetchData(state){
            state.loading = true ;
        } ,
        fetchDataSuccess(state){
            state.loading = false ;
        },
        fetchDataFailed(state){
            state.loading = false ;
        },

        setStatisticsList(state , action : PayloadAction<DashBoardStatistics>){
            state.statistics = action.payload ;

        },
        setHighestStudentList(state , action : PayloadAction<Student[]>){
            state.highestStudentList = action.payload ;
        },
        setLowestStudentList(state , action : PayloadAction<Student[]>){
            state.lowestStudentList = action.payload ;
        },
        setRankingByCityList(state , action : PayloadAction<RankingByCity[]>){
            state.rankingByCityList = action.payload ;
        },
    }
})
//actions
export const dashboardActions = dashboardSlice.actions ;

//selector 
export const selectDashBoardLoading =             (state : RootState)=> state.dashboard.loading;
export const selectDashBoardStatistics =          (state : RootState)=> state.dashboard.statistics;
export const selectDashBoardHighestStudentList =  (state : RootState)=> state.dashboard.highestStudentList;
export const selectDashBoardLowestStudentList =   (state : RootState)=> state.dashboard.lowestStudentList;
export const selectDashBoardRankingByCityList =   (state : RootState)=> state.dashboard.rankingByCityList;

//reducer
const dashboardReducer = dashboardSlice.reducer ; 
export default dashboardReducer ;