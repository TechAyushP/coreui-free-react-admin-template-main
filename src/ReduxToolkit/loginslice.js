import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const adminLogin = createAsyncThunk(
    "loginslice/thunk", // 1st take name 2nd take calback function in async await
    async (args) => {   // accept args login.js
        console.log(args,'args')  // kahani kuch asi h ki admin login me ham apni detail store karke yha bhej re h or yha par usko apni api se match kara re h 

        const res= await axios.post("http://localhost:8080/api/v1/admin/login", args)
        // console.log(res, ' res');
        
        
        return res.data;
        
    }
);

export const loginslice = createSlice({
    name: "loginslice",
    initialState: {
        users: [],
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
                state.error = action.error.message; 
            });
    }
});

