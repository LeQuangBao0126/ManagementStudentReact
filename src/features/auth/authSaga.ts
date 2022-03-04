import { PayloadAction } from "@reduxjs/toolkit";
import { User } from "models";
import { call , fork, put, take } from "redux-saga/effects" ; 
import { authActions, LoginPayload } from "./authSlice";

function  MockUser() : Promise<User>  {
    return new Promise( (resolve , reject) =>{ 
        try{
            resolve({ id : '1' , name : 'lequangbao'})
        }catch(e){
            reject({err : e})
        }
    })
}

function* handleLogin(payload : LoginPayload){
   try{
        const userFetched = yield call(MockUser) 
        yield put(authActions.loginSuccess(userFetched))
        localStorage.setItem('access_token',JSON.stringify(userFetched));
        //redirect trong saga
        setTimeout(() => {
            payload.history.push("/admin")
        }, 1000);
   }catch(err ){
     yield put(authActions.loginFailed(err.message))
   }
}
function* handleLogout(){
    localStorage.removeItem('access_token');
}

function* watchLoginFlow(){
    while(true){
        const isLoggedIn = Boolean(localStorage.getItem('access_token'));
        if(!isLoggedIn){
            const action : PayloadAction<LoginPayload> = yield take(authActions.login.type)
            yield fork(handleLogin,action.payload) ;
        } 
        yield take(authActions.logout.type)
        yield call(handleLogout )
    }
}

export default function* authSaga(){
    console.log("auth saga")
    yield fork(watchLoginFlow)  
}