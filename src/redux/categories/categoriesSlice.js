import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
     category: null
}

export const categorySlice = createSlice({
   name: "category",
   initialState: INITIAL_STATE,
   reducers: {
    selectedCategory: (state, action) => {
         return {...state,
                 category: action.payload,        }
    }
   } 
});

export const {selectedCategory} = categorySlice.actions;

export default categorySlice.reducer
