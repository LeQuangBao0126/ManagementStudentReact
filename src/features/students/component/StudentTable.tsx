import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, 
  DialogTitle, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { cityActions, selectCitiesMap } from "features/city/citySlice";
import { Student } from "models";
import { useEffect, useState } from "react";

export interface StudentTableProps{
    studentList :  Student[] | undefined
    onRemove? : ( student : Student)=> void
    onEdit? :  ( id : string)=> void
}

const StudentTable = ({studentList , onRemove ,onEdit} : StudentTableProps)=>{
   const [ open ,setOpen ] = useState(false)
   const [selectedStudent , setSelectedStudent ] = useState<Student>()

    const dispatch = useAppDispatch()
    const getMarkColor = (mark : number ) : string=>{
        if( mark >= 8 ) return "green"
        return "red";
    }
    const citiesMap = useAppSelector(selectCitiesMap)

    useEffect(()=>{
        dispatch(cityActions.fetchCityList())

    },[dispatch ])

    const handleRemoveClick = (st : Student)=> {
      setSelectedStudent(st);
      setOpen(true);
      // console.log("selectedStudent",selectedStudent)
    }
    const onRemoveClick = ()=>{
            if(onRemove){
              onRemove(selectedStudent!)
            }
    }

     return (
      <>
        <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Mark</TableCell>
              <TableCell>City</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {studentList && studentList.map((row,idx) => (
              <TableRow
                key={idx}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">  {row.id}</TableCell>
                <TableCell >{row.name}</TableCell>
                <TableCell >{row.gender}</TableCell>
               <TableCell  style={{color : `${ getMarkColor(row.mark)}` }} ><Box fontWeight={'bold'}>{row.mark}</Box></TableCell>
                <TableCell >{  row.city}</TableCell>
                <TableCell >
                    <Button variant="contained"  
                      color="primary" 
                      style={{marginRight:'10px'}}
                      onClick={()=> onEdit && onEdit(row.id! )  }
                      >Edit</Button>
                    <Button variant="contained"  color="error" onClick={()=> handleRemoveClick(row) }>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </TableContainer> 
         {/* dialog */}

        <Dialog
        open={open}
        onClose={()=>{}}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>
          {"Xác nhận thao tác"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
           Bạn có muốn xoá thanh niên {`${selectedStudent?.name}`} này không ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=> setOpen(false)}>Huỷ Thao Tác</Button>
          <Button onClick={()=> onRemoveClick() } variant="contained" color="error">
            Đồng ý
          </Button>
        </DialogActions>
      </Dialog>
        {/* end dialog */}
        </>
    )
}





export default StudentTable;