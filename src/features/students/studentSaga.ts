import { PayloadAction } from "@reduxjs/toolkit";
import studentApi from "api/studentApi";
import { ListParams, ListResponse, Student } from "models";
import { call, debounce, put, takeLatest } from "redux-saga/effects";
import { studentActions } from "./studentSlice";

function* fetchStudentList( action : PayloadAction<ListParams> ){
        try{
          const studentList :ListResponse<Student>=  yield call(studentApi.getAll, action.payload )
          yield put(studentActions.fetchStudentListSuccess({
            data : studentList.data,
            pagination : studentList.pagination
          }))
        }catch(e){
                
        }
}
function* handleSearchDebounce( action : PayloadAction<ListParams>){
   //yield put(studentActions.setFilter(action.payload)) 
   console.log("saga run")
}

export default function* studentsSaga() {
    yield  takeLatest( studentActions.fetchStudentList.type , fetchStudentList )
    yield debounce(1000, studentActions.setFilterWithDebounce.type , handleSearchDebounce)
}