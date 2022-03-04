import { AccountCircle } from "@mui/icons-material";
import { Box, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import { City, ListParams } from "models";
import { ChangeEvent } from "react";

export interface StudentFilterProps {
    filter : ListParams | undefined;
    onChange? : (newFilter :ListParams )=> void;  //thay dổi select thành phố 
    onSearchChange? :  (newFilter :ListParams )=> void;  //còn cái này gõ input sẽ có debounce 
    cityList : City[] ;

}

const StudentFilter = ({ filter , cityList ,onChange, onSearchChange } : StudentFilterProps) =>{
    const handleSearchChange = (e : ChangeEvent<HTMLTextAreaElement | HTMLInputElement> )=>{
        //them vào 1 filed name_like  
        if(!e.target.value){
            return
        }
        const newFilter = {...filter ,_page: 1 ,name_like : e.target.value}
        if(onSearchChange){
            onSearchChange(newFilter)
        }
    }
    const handleChangeSelect = (event: SelectChangeEvent) =>{
       if(!onChange){return}
       let newFilter ;
         newFilter  = {...filter, _page: 1 ,city : event.target.value || undefined  }
       onChange(newFilter)
    }
    return (<>
        <Box>
            <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                            <TextField  size="small"
                            label="Search Sinh Viên Debounce" 
                            variant="standard" 
                            onChange={handleSearchChange}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                          <Box>
                            <FormControl fullWidth>
                                <InputLabel >City </InputLabel>
                                <Select
                                    value={ filter?.city || ''}
                                    label="Age"
                                    onChange={handleChangeSelect}
                                >
                                    <MenuItem value={''}><em>None</em></MenuItem>
                                    {cityList.map(item => {
                                        return (
                                            <MenuItem key={item.code} value={item.code}>{item.name}</MenuItem>
                                        )
                                    })}
                                </Select>
                            </FormControl>
                          </Box>  
                    </Grid>
            </Grid>
        </Box>
    </>)
}

 export default StudentFilter ;

 
