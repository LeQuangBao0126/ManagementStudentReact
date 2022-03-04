import './LoginPage.scss';
import { Box, Paper, Typography,Button ,Stack, CircularProgress} from '@mui/material';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import {authActions, selectIsLoggedIn} from 'features/auth/authSlice' ;
import { useHistory } from 'react-router-dom';
export interface ILoginPage{


}

const LoginPage = (props : ILoginPage)=>{
   const dispatch   =  useAppDispatch();
   const history = useHistory();
 //  const isLoggedIn =  useAppSelector(selectIsLoggedIn) ;
    const isLogging = useAppSelector(state=> state.auth.logging)
   const handleLoginClick = ()=>{
       dispatch(authActions.login({username : 'bao' , password: '123',history : history }))
   }
   
   return <div className="wrappedLogin">
                <Paper className="paper-login" >
                    <Box padding={"10px"} >
                    <Typography>Quản lý TPHCM </Typography>
                        <Button variant='contained' onClick={() => handleLoginClick()}>
                        {isLogging && <CircularProgress size={20} color={'primary'} /> }    Login
                        </Button>
                    </Box>
                </Paper>
           </div>
}


export default LoginPage;