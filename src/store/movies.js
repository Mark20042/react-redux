import { createSlice } from "@reduxjs/toolkit";

export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    list: [
      { id: 1, title: "Inception" },
      { id: 2, title: "The Matrix" },
      { id: 3, title: "Interstellar" },
      { id: 4, title: "The Dark Knight" },
      { id: 5, title: "Pulp Fiction" },
      { id: 6, title: "The Lord of the Rings" },
    ],
  },
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
  },
});
export const { setMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
