import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"
import cartReducer from "./redux/cart/cartSlice"
import productReducer from "./redux/product/productSlice"
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/lib/persistStore';
import categoriesReducer from "./redux/categories/categoriesSlice";

const reducers = combineReducers({
   category: categoriesReducer,
   cart: cartReducer,
   product: productReducer
})

const persistConfig = {
     key: "root",
     storage,
     whitelist: [`cart`]
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
     reducer: persistedReducer,
     middleware: (getDefaultMiddleware) =>
     getDefaultMiddleware({
       serializableCheck: false,
     }),
})

export const persistor = persistStore(store)
