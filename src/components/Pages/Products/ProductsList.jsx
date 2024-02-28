import React from 'react'
import ProductCard from '../../ProductCard/ProductCard'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart } from "../../../redux/cart/cartSlice"




export const GridDiv = styled.div`
display: grid; grid-template-columns: repeat(3, 1fr);
gap: 1em;

@media (max-width: 596px) {
  display: flex; flex-direction: column; justify-content: center; align-items: center;  gap: 1em;
   
}
`

const ProductList = () => {

  const dispatch = useDispatch()
  const listProducts = useSelector( state => state.product.product)
  const selectCat = useSelector(state => state.category.category)

  const filterCategory = listProducts.filter( cat => {
     return cat.category.toLowerCase() == selectCat
  })

  

  return (
     <>
    <GridDiv>
       {filterCategory.length  ? 
          (filterCategory.map( prod => {
                
           const {id, img, price, desc, title} = prod;
         return <ProductCard key={id}>
         <Link to={title}><img alt='prod-logo' src={img} /></Link>
         <h3>{title}</h3>
         <p>${price}</p>
         <span>{desc}</span>
         <button onClick={() => dispatch(addToCart({id, img, price, desc, title}))}>Add to Cart</button>
      </ProductCard>
}))
       :
       
       
       listProducts.map( prod => {
                
           const {id, img, price, desc, title} = prod;
         return <ProductCard key={id}>
          <Link to={title}><img alt='prod-logo' src={img} /></Link>
          <h3>{title}</h3>
          <p>${price}</p>
          <span>{desc}</span>
          <button onClick={() => dispatch(addToCart({id, img, price, desc, title}))}>Add to Cart</button>
     
         </ProductCard>
       
       
       })}


       </GridDiv>

    </>
  )
}

export default ProductList
