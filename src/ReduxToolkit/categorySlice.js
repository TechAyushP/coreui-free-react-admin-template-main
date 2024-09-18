import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const adminLogin = createAsyncThunk(
    "categorySlice/thunk",
    async (args) => {
        const res= await axios.post("http://localhost:8080/api/v1/category/create/category",args,{
            headers:{
                'Content-Type':"multipart/form-data"
            }
        })
        return res.data;
    }
);

export const categorySlice = createSlice({
    name: "categorySlice",
    initialState: {
        data: [],
        loading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(adminLogin.pending, (state) => {
                state.loading = true;
            })
            .addCase(adminLogin.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(adminLogin.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message; // 
            });
    }
});

