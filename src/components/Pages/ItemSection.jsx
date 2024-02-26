import React from 'react'
import { useParams } from 'react-router'




const ItemSection = props => {
  
     const {item} = useParams()

    return (
    <>
      <h2>{item}</h2>
      
    </>
  )
}

export default ItemSection
