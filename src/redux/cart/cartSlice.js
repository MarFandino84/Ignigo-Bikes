import { createSlice } from '@reduxjs/toolkit';
import {
  addItemToCart,
  removeItemFromCart,
  resetShippingCost,
} from "./cartSliceUtils"

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
  shippingCost: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: INITIAL_STATE,
  reducers: {
    addToCart: (state, action) => {
      return {
        ...state,
        shippingCost: 0,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    },
    removeFromCart: (state, action) => {
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
        
      };
    },
    clearCart: (state) => {
      return {
        ...state,
        shippingCost: 0,
        cartItems: [],
      };
    },
    toggleHiddenCart: (state) => {
      return {
        ...state,
        hidden: !state.hidden,
      };
    },
  },
});

export const { addToCart, clearCart, removeFromCart, toggleHiddenCart } =
  cartSlice.actions;

export default cartSlice.reducer;