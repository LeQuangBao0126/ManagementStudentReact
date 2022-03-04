import { Box, Paper, Typography } from "@mui/material";
import { ReactNode } from "react";
import StarIcon from '@mui/icons-material/Star';

export interface IWidgetProps{
    title : string ;
    children? : any ;
}

const Widget  = (props : IWidgetProps)=>{
    return <>
        <Paper> 
            <Box paddingTop={'10px'}>
             <Typography padding={'10px'} variant="h4"> {props.title}  <StarIcon color="primary" ></StarIcon></Typography>
            </Box>
            <Box mt={'15px'}>
              {props.children}
            </Box>
        </Paper>
      
    </>
} 
export default Widget ; 