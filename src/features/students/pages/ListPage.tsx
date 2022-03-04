import { Box, Button, Pagination } from "@mui/material";
import studentApi from "api/studentApi";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { selectCities } from "features/city/citySlice";
import { ListParams, Student } from "models";
import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import StudentFilter from "../component/Filters";
import StudentTable from "../component/StudentTable";
import { selectStudentFilter, selectStudentList, 
    selectStudentPagination, studentActions } from "../studentSlice";



const ListPage = ()=>{
    const dispatch = useAppDispatch();
    const history = useHistory();
    //const loading = useAppSelector(selectStudentLoading);
    const studentList = useAppSelector(selectStudentList);
    const studentFilter = useAppSelector(selectStudentFilter);
    const studentPagination = useAppSelector(selectStudentPagination);
    const cityList = useAppSelector(selectCities);

    useEffect(()=>{
        dispatch(studentActions.fetchStudentList( studentFilter! ))
    },[dispatch ,studentFilter ])
    
   const handleChangePagination= (e  : any, page : number)=>{
        dispatch(studentActions.setFilter({
            ...studentFilter,
            _page : page!
        }))
   }
   
   const handleOnSearchChange = (newFilter : ListParams) =>{
        dispatch(studentActions.setFilterWithDebounce(newFilter) )
   }
   const handleFilterChange = (newFilter : ListParams) =>{
        dispatch(studentActions.setFilter(newFilter) )
   }
   const handleOnRemove = async (st : Student )=>{
        try{
            await studentApi.remove(st.id! )
            const newFilter = {...studentFilter}

            dispatch(studentActions.setFilter(newFilter!));
          
        }catch(err){
            
        }
   }
   const handleEditStudent = (id : string)=>{
       history.push(`/admin/students/${id}`)
   }
  
    return (
        <>
        <Box>
            <Link to={'/admin/students/add'} style={ {textDecoration : 'none'}}>
                 <Button variant="contained" color="primary">Add Student</Button>
            </Link>
        </Box>
        {/* filter  */}
        <Box mb={3} mt={5}>
            {/* thằng này sẽ bắn ra event chứ ko làm . để listPage làm  */}
            <StudentFilter 
            onChange={ handleFilterChange }
            onSearchChange={handleOnSearchChange}  
            filter={studentFilter!} cityList={cityList}/>
        </Box>
        <Box>
            <StudentTable 
                studentList={ studentList }
                onRemove = {handleOnRemove}
                onEdit = {handleEditStudent}
            ></StudentTable>
        </Box>
       <Box marginTop={'10px'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
          <Pagination color="primary" page={ studentPagination?._page } 
                 count={Math.ceil(studentPagination?._totalRows! / studentPagination?._limit!)} 
                 onChange={handleChangePagination} />
       </Box>
        </>
    )
}

export default ListPage ;