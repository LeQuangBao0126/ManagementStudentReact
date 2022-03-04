 
import { Control ,useController} from 'react-hook-form'
import { FormControl, FormControlLabel, FormLabel, Radio } from '@mui/material';
import RadioGroup from '@mui/material/RadioGroup';

export interface RadioOption {
    label? : string ;
    value : number | string ;
}

interface RadioGroupFieldProps    {
    name : string ;
    control :  Control<any> ;
    label? : string ;
    disabled? : boolean ; 
    options? : RadioOption[] ;
}

const RadioGroupField = ({name , control , label,disabled, options, ...inputProps } : RadioGroupFieldProps )=>{
    const {
        field: { onChange, value  },
        fieldState: { invalid, error,isTouched, isDirty },
      } = useController({
               name,
               control 
        });
        /// sử dụng hook useController đê connect vs form . rồi bắn ngc lại form 
        //console.log("control trgon radio " , value)
    return (
            <FormControl disabled={disabled}>
                <FormLabel>{label}</FormLabel>
                <RadioGroup
                    defaultValue={control._defaultValues.gender}
                    name={name}
                    onChange ={onChange}
                >
                    { options?.map((item : RadioOption ,idx: number )=> {
                        return  <FormControlLabel key={idx} value={item.value} control={<Radio />} label={item.label!} />
                    }) }
                </RadioGroup>
            </FormControl>
        )
}
export default RadioGroupField ;



