import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "app/store";
import { City, ListResponse } from "models";
 
 
export interface CitiState{
    loading : boolean ;
    list : City[] ;
}

const initialState : CitiState = {
    loading : false,
    list : [] 
}

const citySlice = createSlice({
    name : 'city',
    initialState ,
    reducers:{
        fetchCityList(state){
            state.loading = true ;
        },
        fetchCityListSuccess(state ,action : PayloadAction<ListResponse<City>>){
            state.loading = false ;
            state.list = action.payload.data ;
        },
        fetchCityListFailed(state){
            state.loading = false ;
        },
         
    }
});
//acxtions 
export const cityActions = citySlice.actions ;

//selectors 
export const selectCities = (state :RootState)=>state.city.list ;

export const selectCitiesMap = createSelector(selectCities,(cityList )=>  cityList.reduce((map : {[key:string ]: City},city : City)=>{
    map[city.code] =  city
    return  map
},{ }  ))
//cityList này thay đồi thì  selectCitiesMap sẽ đc tính lại  

export const cityOptions = createSelector(selectCities ,(cityList => cityList.map(city => {
    return {
        label : city.name,
        value : city.code
    }
}) ))
//reducer
export default citySlice.reducer;