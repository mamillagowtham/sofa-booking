import { configureStore } from "@reduxjs/toolkit";
import cartReduce from "./Features/cart/cartFile";

export const  store = configureStore({
    reducer:{
        cartState:cartReduce,
    }
})