import React from 'react'
import styled from 'styled-components'


const MainProductCardFrame = styled.div`
min-height: 20vh;
border-radius: 6px;
background-color: white;
display: grid; grid-template-columns: auto(4, 1fr);
justify-content: center; align-items: center;
border: 1px solid lightcyan;
padding: 1em; margin: 1.5em;

img {
  max-width: 100%; max-height: 100%;
  object-fit: cover; 
  
}
h3, p, span {
     text-align: center;
     margin-bottom: 1em;
}

button {
      min-width: 90%;
      border-radius: 8px;
      background-color: var(--red-brick);
      text-align: center; padding: 1em;
      color: white; font-size: 1em;
      font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

`

const ProductCard = ({children}) => {
  return (
    <>
       <MainProductCardFrame>
        {children}
       </MainProductCardFrame>
       
       
    </>
  )
}

export default ProductCard
