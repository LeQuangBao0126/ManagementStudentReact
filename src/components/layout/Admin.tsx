import { Box, makeStyles } from "@mui/material";
import Header from "components/common/Header";
import Main from "components/common/Main";
import SideBar from "components/common/SideBar";
import DashBoard from "features/dashboard/DashBoard";
import Students from "features/students/Students";
import { Switch ,Route } from "react-router-dom";

export interface IAdminLayoutProps{
    
}
const styles = {
    wrapper : {
        display: 'grid',
        gridTemplateRows: 'auto 1fr',
        gridTemplateColumns : '300px 1fr',
        gridTemplateAreas : '"header header" "sidebar main" ',
        minHeight:'100vh'
    },
    header :{
        gridArea : 'header',
        backgroundColor : 'pink',
    },
    sidebar : {
        gridArea : 'sidebar',
        borderRight: '1px solid black'

    },
    main : {
        gridArea : 'main',
        padding: '10px'
    }
}
const AdminLayout = (props : IAdminLayoutProps)=>{
    return <div className="admin__wrapper" style={styles.wrapper}>
        <Header style={styles.header} ></Header>
        <SideBar style={styles.sidebar}  /> 
        <Main style={styles.main} >
            <Switch>
                <Route path={'/admin/dashboard'} > <DashBoard></DashBoard> </Route>
                <Route path={'/admin/students'} > <Students></Students> </Route>
            </Switch>
        </Main>
     </div>
}
export default AdminLayout;