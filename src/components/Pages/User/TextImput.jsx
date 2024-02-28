import React from 'react'
import { useField } from 'formik'
import styled from 'styled-components'


const InputStyle = styled.input`
  border-color: ${({ error }) => (error ? "var(--red-brick)" : "none")};
 border-radius: 5px;
 min-width: 12em; height: 3em; text-align: center;
 margin: 2em;

 

`


const TextImput = ({label, ...props}) => {
  
   const [field, meta] = useField(props)
  
    return (
    <>
       <label htmlFor={props.id || props.name}>{label}</label>
       <InputStyle {...field} {...props} />
      


    </>
  )
}

export default TextImput
