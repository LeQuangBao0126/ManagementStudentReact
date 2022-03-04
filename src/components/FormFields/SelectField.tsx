 
import { Control ,useController} from 'react-hook-form'
import { FormControl, FormLabel, MenuItem } from '@mui/material';
import Select from '@mui/material/Select';

export interface SelectOption {
    label? : string ;
    value : number | string ;
}

interface SelectFieldProps    {
    name : string ;
    control :  Control<any> ;
    label? : string ;
    disabled? : boolean ; 
    options? : SelectOption[] ;
}

const SelectField = ({name , control , label,disabled, options, ...inputProps } : SelectFieldProps )=>{
    const {
        field: { onChange, value  },
        fieldState: { invalid, error,isTouched, isDirty },
      } = useController({
               name,
               control 
        });
        /// sử dụng hook useController đê connect vs form . rồi bắn ngc lại form 
        //console.log("control trgon Select " , value)
    return (
            <FormControl disabled={disabled}>
                <FormLabel>{label}</FormLabel>
                <Select
                    defaultValue={control._defaultValues.gender}
                    name={name}
                    onChange ={onChange}
                >
                    { options?.map((item : SelectOption ,idx: number )=> {
                        return  <MenuItem value={item.value}>{item.label}</MenuItem>
                    }) }
                </Select>
            </FormControl>
        )
}
export default SelectField ;



