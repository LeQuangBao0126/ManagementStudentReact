import { useRouteMatch ,Switch, Route, Link, NavLink} from "react-router-dom"
import AddEditPage from "./pages/AddEditPage"
import ListPage from "./pages/ListPage"

function Students() {
  const match = useRouteMatch()
  console.log("useRouteMatch",match.path)
    return (
      <div> 
        <Switch>
          <Route path={`${match.path}/`} exact>
                 <ListPage/>
          </Route>
          <Route path={`${match.path}/:studentId`}>
               <AddEditPage/>
          </Route>
          <Route path={`${match.path}/add`}>
               <AddEditPage/>  
          </Route>
        </Switch>
      </div>
    )
}
  
export default Students