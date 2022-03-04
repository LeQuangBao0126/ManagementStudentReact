import { Box } from "@mui/material";
import { ReactNode } from "react";

export interface IMain{
    style : any;
    children?: ReactNode
}

const Main = (props : IMain)=>{
    return <>
    <Box {...props}>
       {props.children}
    </Box>
    </>
}
export default Main;