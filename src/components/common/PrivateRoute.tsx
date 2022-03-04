import { ReactNode } from "react";
import { Redirect, Route } from "react-router-dom";

export interface IPrivateRoute{
    children : ReactNode
    path: string 
}

const PrivateRoute = (props : IPrivateRoute)=>{
    //if have token => allow else redirect to login page
    let isLoggedIn = Boolean(localStorage.getItem("access_token")) 
    if(!isLoggedIn){
        return <Redirect to="/login" />
    }
    return <Route {...props}/>
}
export default PrivateRoute;