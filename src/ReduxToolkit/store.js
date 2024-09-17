import { configureStore } from "@reduxjs/toolkit";
import { loginslice } from "./loginslice";

 const  store =configureStore({
    reducer:{
        app:loginslice

    }
})





export default store;
