import {  TableRow,TableContainer,
     Table , TableBody , TableHead, Paper } from "@mui/material";
     import TableCell from '@mui/material/TableCell';
import { Student } from "models";

export interface IStudentRankingList {
    studentList : Student[]
}   

const StudentRankingList = ({ studentList } : IStudentRankingList )=>{
    return <>
        <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Tên ứng viên</TableCell>
            <TableCell align="right">Điểm</TableCell>
            <TableCell align="right">Giới Tính</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {studentList.map((row,idx) => (
            <TableRow
              key={idx}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                    {row.name}
              </TableCell>
              <TableCell align="right">{row.mark}</TableCell>
              <TableCell align="right">{row.gender}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>  
     </>
}
export default StudentRankingList;