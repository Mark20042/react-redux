import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movies.js";
export const store = configureStore({
  reducer: {
    // your reducers here
    movies: moviesReducer,
  },
});
