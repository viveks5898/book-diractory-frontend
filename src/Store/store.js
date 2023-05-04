import { combineReducers, configureStore } from "@reduxjs/toolkit";

import bookReducer from "../feature/Feature.slice";

const combineReducer = combineReducers({
  book: bookReducer,
});

const rootReducer = (state, action) => {
  return combineReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
});
