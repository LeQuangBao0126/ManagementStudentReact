import { Box, Button, Typography } from "@mui/material";
import studentApi from "api/studentApi";
import { Student } from "models/student";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import StudentForm from "../component/StudentForm";


const AddEditPage = ()=>{
    //get path 
    const {studentId } = useParams<{ studentId: string}>();
    const isEdit =  Boolean(studentId)
    const [student ,setStudent] = useState<Student>();
    
    useEffect(()=>{
        if(studentId && studentId == 'add'){
            return ;
        }
        // call
        async function fetchStudent() {
            let studentResponse =   await studentApi.getById(studentId) ;
            setStudent(studentResponse)
        }
        fetchStudent();

    },[studentId])

    const initialValue = {
        name:'',
        age: 0,
        mark : 0 ,
        gender : 'male', //can be Enum 
        city : '',
        ...student
    } as Student
    const handleStudentFormSubmit = (formValues : Student)=>{
        console.log('from parent page formValues is  ',formValues) ;
        //call api to add update
    }
    return (
        <>
        {student && JSON.stringify(student)}
           <Box>
               <Link to={"/admin/students"} style={ {textDecoration : 'none'}}  >
                   <Button variant="contained" color="primary">Back</Button>
               </Link>
           </Box>
           <Box>
                <Typography variant="h4">
                    {isEdit && studentId != 'add' ? 'Update student Info' : 'Add New Student'}
                </Typography>
           </Box>
           { (!isEdit || Boolean(student))  ?  
            <Box mt={3}>
                <StudentForm 
                    initialValue = {initialValue}
                    onSubmit = {handleStudentFormSubmit} ></StudentForm>
            </Box> : ''
            }
          
        </>
    )
}

export default AddEditPage ;