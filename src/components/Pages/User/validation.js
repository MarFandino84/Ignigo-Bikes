import React from 'react'
import { useFormik } from 'formik'


const validation = values => {
  
  const errors = {};
     if(!values.name && !values.surname && !values.email) {
        errors.name = "required"
        errors.surname = "required"
        errors.email = "required"
        
    }
     
  

  
    return errors
    
}



export default validation
