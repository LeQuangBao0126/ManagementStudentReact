import { Card, Paper, CardHeader ,Avatar} from "@mui/material";
import {  ReactNode } from "react"


export interface IStaticticsItem {
    icon? : ReactNode;
    label? : string ;
    value? : string ;
}   

const StaticticsItem = (props : IStaticticsItem )=>{
    return <>
       <Paper elevation={3}>
            <Card>
                <CardHeader  avatar={ props.icon}
                title={props.label}
                subheader= {`Số Lượng : ${props.value}`}
            />
            </Card>
       </Paper>  
     </>
}
export default StaticticsItem