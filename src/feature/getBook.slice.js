import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosGet } from "../instance/axiosinstance";
const initialState = {
    data: [],
    error: false,
    loading: true,
  };
  export const getBooks = createAsyncThunk("bookSlice.getBook", async (data) => {
    const res = await axiosGet("/getBooks", data)
    
return res;  
});
  
  const getBookSlice = createSlice({
    name: "getBookSlice",
    initialState,
    extraReducers: {
      [getBooks.pending]: (state) => {
        state.error = false;
      },
      [getBooks.fulfilled]:(state, {payload})=>{
        state.data = payload;
        state.error = false
      },
      [getBooks.rejected] :(state) =>{
       state.error = false
      }
    },
  });
  
   export default getBookSlice.reducer;