import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const adminLogin = createAsyncThunk(
    "loginslice",  
    async (args,{rejectWithValue}) => { 
        
        const response = await fetch("http://localhost:8080/api/v1/admin/login",{
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(args)
        });
        try{
            const result = await response.json(); // Await the response here
        return result;

        }
        catch(error){
            return rejectWithValue("opps found an error")

        }
        
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
                state.error = action.error.message; // 
            });
    }
});

