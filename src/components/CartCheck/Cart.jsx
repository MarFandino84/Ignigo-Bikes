import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {ButtonStyle, CartMainDiv, Container, RenderDivProducts, RenderProduct, TableStyles} from "./CartStyles"
import { addToCart, clearCart, removeFromCart } from '../../redux/cart/cartSlice';


const Cart = () => {
  
    const {cartItems} = useSelector(state => state.cart)
    const dispatch = useDispatch();
    const Grantotal = cartItems.reduce( (acc, item) => {
       return acc += item.price * item.quantity
    }, 0)
    const shippingCost = (val) => {
       if (val > 50) {
           return 0
       }
       else {
         return 50;
       }
    }
    const handleClickOrder = () => {
        dispatch(clearCart())
        alert("Your order is been prepared, we will contact you ASAP")
    }
   
    return (
     <>
     <Container>
       <h2 style={{textAlign: "center"}}>Your Order</h2>
      {cartItems.length? ( <CartMainDiv>
        <RenderDivProducts>
          {cartItems.length && 
           (cartItems.map( item => {
               const {img, title, quantity, price ,id} = item
          
             return <RenderProduct key={id}>
                <img src={img} />
                <p>{title}</p>

                <button onClick={() => dispatch(removeFromCart(id))} >-</button>
                <p>{quantity}</p>
                <button onClick={() => dispatch(addToCart({img, title, quantity, price ,id}))}>+</button>
                <p>${price}</p>

             </RenderProduct>}))
          }
 {cartItems.length && (
        <TableStyles>
          <tbody>
                <tr>
                  <th>SubTotal</th>
                  <td >${Grantotal}</td>
                </tr>
                <tr>
                  <th>Shipping Cost</th>
                  <td>${shippingCost(Grantotal) }</td>
                </tr>
        
            <tr>
                  <th>Total</th>
                  <td>${Grantotal + shippingCost(Grantotal)} </td>
                </tr>
            </tbody>

        </TableStyles>)
}
        <ButtonStyle onClick={handleClickOrder}>Send Order</ButtonStyle>
        </RenderDivProducts>  
  </CartMainDiv> ) 
  :
   
            <h2>No items</h2>}
    </Container>  
      
    </>
    );

    };

export default Cart
