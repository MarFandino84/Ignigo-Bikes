import React from 'react'
import { UserFormStyled, Container } from './UserFormStyles'
import { Formik, useFormik} from "formik"
import * as Yup from "yup"
import TextImput from './TextImput'

var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

const onSubmit = () => {
     console.log("submitted");
}

const solidSchema = Yup.object({
     name: Yup.string().trim().min(2).required("Required Field"),
     password: Yup.string().matches(strongRegex, "At least 1 Lowercase, Uppercase, numeric and special character").required("Required"),
     surname: Yup.string().trim().min(2).required("Required Field"),
     email: Yup.string().email("invalid email").required("must enter a password")   
})

const UserForm = () => {
     return (    
     <Formik initialValues={{
         name:"",
         surname:"",
         email:"",
         password: "",

      }}
      validationSchema={solidSchema}
      onSubmit={(values) => {
            console.log(values);
        
      }}
      

      >
      {({errors, touched}) =>   
      <Container>    
         <UserFormStyled >
            <TextImput
            name='name'
            label="Name"
            placeholder='Name'
            type='text'
            
            />
            {errors.name && touched.name ? <span>{errors.name}</span>  : null }
            
            <TextImput 
            type='text'
            name='surname'
            label='Last Name'
            placeholder='Last Name'
           
            />
            {errors.surname && touched.surname ? <span>{errors.surname}</span>  : null }
            <TextImput 
            name='email'
            label='E-Mail'
            placeholder='E-mail'
            type='email'
            />
            {errors.email && touched.email ? <span>{errors.email}</span>  : null }
            <TextImput
            name='password'
            label='Password'
            placeholder='Password'
            type='password'
            
            />
            {errors.password && touched.password ? <span>{errors.password}</span>  : null }
        <button type='submit'>Submit</button>
             
         </UserFormStyled>
         </Container>}
         
         </Formik>
              
    
  )
}

export default UserForm
