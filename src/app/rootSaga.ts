import { all } from 'redux-saga/effects'
//import counterSaga from "../features/counter/counterSaga";
import authSaga from 'features/auth/authSaga' ;
import dashBoardSaga from 'features/dashboard/DashBoardSaga';
import studentsSaga from 'features/students/studentSaga';
import citySaga from 'features/city/citySaga';
function* helloSaga() {
     yield console.log("helloSaga")
}

export function* rootSaga() {
    console.log('Run root saga')
    yield all([
        helloSaga(), 
        authSaga() , dashBoardSaga(), studentsSaga(), citySaga()])
}


