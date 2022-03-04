import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "app/store";
import { ListParams, ListResponse, PaginationParams, Student } from "models";
 
export interface StudentState {
    loading : boolean ;
    list? : Student[] ,
    filter? : ListParams ,
    pagination? : PaginationParams
}
const initialState : StudentState = {
    loading : false ,
    list : [],
    filter : {
       _page : 1 ,
       _limit: 7
    },
    pagination :{
        _page : 1 ,
        _limit : 7,
        _totalRows : 15 ,
    }
}

const studentSlice = createSlice({
    name : 'student',
    initialState ,
    reducers:{
        fetchStudentList(state,action :PayloadAction<ListParams> ){
            state.loading = true ;
        },
        fetchStudentListSuccess(state,action : PayloadAction<ListResponse<Student>>){
            state.loading = false;
            state.pagination = action.payload.pagination ;
            state.list =  action.payload.data ;
        },
        fetchStudentListFailed(state,action){
            state.loading = false;
        },
        setFilter(state, action : PayloadAction<ListParams> ){
            state.filter  = action.payload ;
        },
        setFilterWithDebounce(state, action : PayloadAction<ListParams> ){
            state.filter  = action.payload ;
        },
    }
});
//acxtions 
export const studentActions = studentSlice.actions ;

//selectors 
export const selectStudentLoading = (state :RootState)=>state.students.loading ;
export const selectStudentList = (state :RootState)=>state.students.list ;
export const selectStudentFilter = (state :RootState)=>state.students.filter ;
export const selectStudentPagination = (state :RootState)=>state.students.pagination ;

//reducer
export default studentSlice.reducer;