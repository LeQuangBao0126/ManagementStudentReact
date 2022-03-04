import { takeLatest,put} from 'redux-saga/effects'
import {PayloadAction} from "@reduxjs/toolkit";
import {incrementSaga ,incrementSagaSuccess} from "./counterSlice";


function* handleIncrementSaga( action : PayloadAction<number>){
    yield console.log("handleIncrementSaga " , action)

    yield console.log("dispatch action >>")
    yield put(incrementSagaSuccess(action.payload))
    yield console.log("completed action >>")
}

export default function* counterSaga() {
    yield takeLatest( incrementSaga.toString() , handleIncrementSaga)
}
