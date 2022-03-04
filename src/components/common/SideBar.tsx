import './SideBar.scss';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import { NavLink } from "react-router-dom";
export interface ISideBar{
    style : any 
}

const SideBar = (props : ISideBar)=>{

    return <>
         <Box sx={{ width: '100%', maxWidth: 300, bgcolor: 'background.paper',borderRight:'1px solid #e0e0e0' }}>
      <nav aria-label="main mailbox folders">
        <List>
          <NavLink to={'/admin/dashboard'} activeClassName="active-item" style={{color:'inherit' , textDecoration:'none'}}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <DashboardIcon/> 
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
            </ListItem>
          </NavLink>
          <NavLink to={'/admin/students'} activeClassName="active-item" style={{color:'inherit' , textDecoration:'none'}}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                 <GroupIcon/> 
              </ListItemIcon>
              <ListItemText primary="Students" />
            </ListItemButton>
          </ListItem>
          </NavLink>
        </List>
      </nav>
    </Box>
    </>
}
export default SideBar;