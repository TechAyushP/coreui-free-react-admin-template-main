import { configureStore } from "@reduxjs/toolkit";
import { loginslice } from "./loginslice";
import  categorySlice  from "./categorySlice";


 const store = configureStore({

    reducer:{
        app: loginslice,
        cat: categorySlice   

    }
})

export default store;
