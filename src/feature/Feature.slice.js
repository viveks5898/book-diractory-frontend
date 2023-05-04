import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosPost, axiosGet } from "../instance/axiosinstance";
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

export const getBooks = createAsyncThunk("bookSlice.getBook", async (data) => {
  const res = await axiosGet("/getBooks");
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

