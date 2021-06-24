import React from 'react';
import {TextField} from '@material-ui/core';
import {useField} from 'formik';

const DateTimePicker = ({
    name,
    ...otherProps
}) => {


const configDataTimePicker ={
    ...otherProps,
    type:'date',
    variant:"outlined",
    fullWidth: true,
    InputLabelProps:{
        shrink: true,
    },
    name,
    
};
// if(meta && meta.touched && meta.error){
//     configDataTimePicker.error=true;
//     configDataTimePicker.helperText=meta.error;
// }

return(
    <TextField {...configDataTimePicker}/>

  );
};

export default DateTimePicker;