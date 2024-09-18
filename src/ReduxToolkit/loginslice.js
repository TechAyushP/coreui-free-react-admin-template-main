import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const adminLogin = createAsyncThunk(
    "loginslice/thunk",
    async (args) => {
        const res= await axios.post("http://localhost:8080/api/v1/admin/login", args)
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
                console.log(action,'action')
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(adminLogin.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message; // 
            });
    }
});

