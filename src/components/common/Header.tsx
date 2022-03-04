import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { useAppDispatch } from "app/hooks";
import {authActions } from 'features/auth/authSlice' ;
import { useHistory } from "react-router-dom";

export interface IHeader{
    style : any
}

const Header = (props : IHeader)=>{

    const dispatch   =  useAppDispatch();
    const history = useHistory();
    const handleLogoutClick = ()=>{
        dispatch(authActions.logout())
    }

    
    return <>
         <Box sx={{ flexGrow: 1 }} {...props}>
            <AppBar position="static">
                <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Dự án abc 
                </Typography>
                <Button color="inherit" onClick={()=> handleLogoutClick() }>Logout</Button>
                </Toolbar>
            </AppBar>
         </Box>
    </>
}
export default Header;