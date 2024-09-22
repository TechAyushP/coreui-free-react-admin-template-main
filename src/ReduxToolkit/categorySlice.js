import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const token = window.localStorage.getItem('token');

export const getcategory = createAsyncThunk(
    "category/all",
    async ( ) => {
       const res = await axios.get("http://localhost:8080/api/v1/category/all/category",  {
        headers:{
            'Content-type':'aplication/json',
            'Acces-Control-Allow-origin': '*',
            Authorization: `Bearer ${token}`
        }
       })
       console.log(res ,'resssssssssssssssss')

        return  res.data

    }
);

  const categorySlice = createSlice({
    name: "categorySlice",

    initialState: {
        data: { },
        isLoading: false,
        isError: false
    },

    extraReducers: (builder) => {
        builder
            .addCase(getcategory.pending, (state,action) => {
                state.isLoading = true;
            })
            .addCase(getcategory.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(getcategory.rejected, (state, action) => {  
                state.isLoading = false;
                state.isError = true; // 
            });
    }
});




export default categorySlice.reducer

