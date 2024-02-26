import React from 'react'
import { UserFormStyled, Container } from './UserFormStyles'
import { useFormik} from "formik"
import * as Yup from "yup"



var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");


const onSubmit = () => {
     console.log("submitted");
}

const solidSchema = Yup.object({
     name: Yup.string().trim().min(2).required("Required Field"),
     password: Yup.string().matches(strongRegex, "At least 1 Lowercase, Uppercase, numeric and special character").required("Required")
})

const UserForm = () => {
  
     const {values , errors, handleSubmit, handleChange } = useFormik({
      initialValues:{
         name:"",
         surname:"",
         email:"",
         password: ""

      },
      onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
      },
      validationSchema: solidSchema
     },
     onSubmit 
     )

    return (
    <>
         <Container>    
         <UserFormStyled onSubmit={handleSubmit}>
            <input 
            name='name'
            id='name'
            value={values.name}
            onChange={handleChange}
            placeholder='Name'
            type='text'
            
            />
            
            <input 
            type='text'
            name='surname'
            id='surname'
            value={values.surname}
            onChange={handleChange}
            placeholder='Surname'
           
            />
            <input 
            name='email'
            id='email'
            value={values.email}
            onChange={handleChange}
            placeholder='E-mail'
            type='email'
            />
            <input 
            name='password'
            id='password'
            value={values.password}
            onChange={handleChange}
            placeholder='Password'
            type='password'
            
            />
        <button type='submit'>Submit</button>




         </UserFormStyled>
         </Container>

    </>
  )
}

export default UserForm
