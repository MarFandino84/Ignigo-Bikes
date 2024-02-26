import { createSlice } from "@reduxjs/toolkit"
import { products } from "../../data/Products"

const INITIAL_STATE = {
     product : products
}

const productSlice = createSlice({
  name: "productos",
  initialState : INITIAL_STATE,
 reducer : {
     getProducts: state => {
         return state
     }
 } 
 
})


 export const {getProducts} = productSlice.actions;

 export default productSlice.reducer



