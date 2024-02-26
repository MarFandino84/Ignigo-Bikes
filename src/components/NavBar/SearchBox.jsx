import React from 'react'
import styled from "styled-components"
import { useState } from 'react'
import { products } from '../../data/Products'
import ProductCard from '../ProductCard/ProductCard'
import { GridDiv } from '../Pages/Products/ProductsList'
import { BiSearch  } from "react-icons/bi"

const SearchDiv = styled.div`
width: 50%;
background-color: white;
display: flex; flex-direction: row;
align-items: center;
border-radius: 5px; 
border: 1px solid black; border-radius: 9px;
`

const SearchBoxStyle = styled.input`
font-size: 1em;
margin: 0 1em;
border: none;
`

const SearchBox = () => {

const [input, setInput] = useState("");


  

   const filterItem = products.filter( prod => { 
      return prod.category.toLowerCase().includes(input.toLowerCase())
   }
   )




    return (
    <>
       <SearchDiv>
      <BiSearch />
      <SearchBoxStyle placeholder='Search' type='text' value={input} onChange={(e) => setInput(e.target.value)}/>
      </SearchDiv>
   <GridDiv>
   {filterItem?.map( prod => {

                const {id, img, price, desc, title} = prod;
              return <ProductCard key={id}>
               <img alt='prod-logo' src={img} />
               <h3>{title}</h3>
               <p>${price}</p>
               <span>{desc}</span>
               <button>Add to Cart</button>
     
              </ProductCard>})}

              </GridDiv>
           </>
    
  )
}

export default SearchBox
