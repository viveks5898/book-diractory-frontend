import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosPost } from "../instance/axiosinstance";
const initialState = {
  data: [],
  error: false,
  loading: true,
};
export const createBook = createAsyncThunk(
  "bookSlice/createBook",
  async (data) => {
    const res = await axiosPost.post(
      "/createBook",

      data
    );
    return res;
  }
);


 const createBookSlice = createSlice({
  name: "createBookSlice",
  initialState,
  extraReducers: {
    [createBook.pending]: (state) => {
      state.error = false;
    },
    [createBook.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.error = false;

      
    },
    [createBook.rejected]: (state) => {
      state.error = true;
    },
  },
});
export default createBookSlice.reducer;

