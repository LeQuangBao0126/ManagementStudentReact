import { Counter } from './features/counter/Counter';
import './App.css';
import { useEffect } from 'react';
import studentApi from 'api/studentApi';
import { Route, Switch ,Redirect} from 'react-router-dom';
import LoginPage from 'features/auth/pages/LoginPage';
import AdminLayout from 'components/layout/Admin';
import PrivateRoute from 'components/common/PrivateRoute';

function App() {

  useEffect(()=>{
    // studentApi.getAll().then( (resp)=> console.log(resp))
  },[])


  return (
    <div>
        <Switch>
            {/* <Redirect from='/' to='/admin' exact></Redirect> */}
            <Route path={"/login"} component={()=> <LoginPage></LoginPage>} />
            <PrivateRoute  path={"/admin"} >
                <AdminLayout></AdminLayout>
            </PrivateRoute>
            <Route path={"*"} component={()=> <>404 not found</>} />
        </Switch>
    </div>
  );
}

export default App;
