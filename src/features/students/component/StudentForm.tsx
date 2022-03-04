import { Box, Button } from "@mui/material";
import InputField from "components/FormFields/InputField";
import { Student } from "models";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import RadioGroupField from "components/FormFields/RadioGroupField";
import SelectField from "components/FormFields/SelectField";
import { useAppSelector } from "app/hooks";
import { cityOptions } from "features/city/citySlice";


const schema = yup.object({
    name: yup.string().max(50).min(5),
    age: yup.number().positive().max(100).integer().required(),
  }).required()

export interface StudentFormProps {
    initialValue : Student ;
    onSubmit  : (formValues : Student)=> void 
}

const StudentForm = ({initialValue , onSubmit} : StudentFormProps)=>{
    const cityOptionsArr : Array<{label:string , value : string }> = useAppSelector(cityOptions)
     const {
        control ,
        register,
        handleSubmit,
      } = useForm<Student>(  {
         defaultValues : initialValue,
         resolver : yupResolver(schema)
     } );

     const handleFormSubmit = (formValue : Student)=>{
        onSubmit(formValue);
     }
    return (
        <Box maxWidth={'400px'}>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                    <InputField label={'Name' } control={control}   name="name"/>
                    <InputField label={'Age' } control={control}   name="age" type="number" />
                    <RadioGroupField label={'Gender'} 
                    control={control} name="gender"
                    options={[{label : 'Male',value:'male'},{label : 'Female',value:'female'}]}
                    ></RadioGroupField>

                    <InputField label={'mark' } control={control}  name="mark" type="number"/>
                    <SelectField label={'City'} control={control} name="city" options={cityOptionsArr}/>
               
               <Box>
                <Button variant="contained" color="primary" 
                    type="submit">Submit</Button>
               </Box>
           </form>
        </Box>
    )
}
export default StudentForm ; 