import { InputHTMLAttributes } from 'react';
import { Control  ,Controller ,useController} from 'react-hook-form'
import TextField from '@mui/material/TextField';
import { Box, FormControl } from '@mui/material';
 


interface InputFieldProps extends  InputHTMLAttributes<HTMLInputElement>  {
    name : string ;
    control :  Control<any> ;
    label? : string ;
}

const InputField = ({name , control , label,  ...inputProps } : InputFieldProps )=>{
    const {
        field: { onChange, onBlur,   value, ref },
        fieldState: { invalid, error,isTouched, isDirty },
        formState: { touchedFields, dirtyFields }
      } = useController({
               name,
               control ,
               defaultValue : '',rules: {
                   required : true
               }
        });
        /// sử dụng hook useController đê connect vs form . rồi bắn ngc lại form 
    return (
           <Box >
               <TextField
                  size="small"
                  value={value}
                  onChange ={onChange}
                  label= {label} 
                  fullWidth 
                  margin={'normal'}
                  variant="outlined" 
                  //inputRef={ref}
                  error={invalid}
                  helperText={error?.message}
                  inputProps = {inputProps}
                  />
           </Box>
        )
}
export default InputField ;



