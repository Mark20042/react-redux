import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movies.js";
import usersReducer from "./users.js";
export const store = configureStore({
  reducer: {
    // your reducers here
    movies: moviesReducer,
    users: usersReducer,
  },
});
