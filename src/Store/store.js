import { combineReducers, configureStore } from "@reduxjs/toolkit";
import getBookReducer from "../feature/getBook.slice";
import bookReducer from '../feature/createBook.slice'
const combineReducer = combineReducers({
  book: bookReducer,
  getBooks:getBookReducer
});

const rootReducer = (state, action) => {
  return combineReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
});
