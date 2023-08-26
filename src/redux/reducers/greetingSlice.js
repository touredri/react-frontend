import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "http://127.0.0.1:3000/api/v1/greetings";

export const fetchMessage = createAsyncThunk('greeting', async() => {
   const message = await axios.get(API_URL);
   console.log(message.data.greeting.greeting);
   return message.data.greeting.greeting
});

const initialState = {
    greeting: "",
    isloading: false,
};

export const greetingSlice = createSlice({
    name: "greeting",
    initialState,
    reducers: {},
    extraReducers: (builder) =>  {
        builder.addCase(fetchMessage.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchMessage.fulfilled, (state, action) => {
            state.greeting = action.payload
            state.isLoading = false;
        });
        builder.addCase(fetchMessage.rejected, (state) => {
            state.isLoading = false;
        });
    },
});

export default greetingSlice.reducer;
