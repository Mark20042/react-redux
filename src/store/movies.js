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
    // adding movie dynamically
    // addMovie: (state) => {
    //   const newMovie = { id: 3, title: "Imong Mama" };
    //   state.list = [...state.list, newMovie];
    // },

    addMovie: (state, action) => {
      const newId = state.list.length
        ? state.list[state.list.length - 1].id + 1
        : 1;
      action.payload = { id: newId, title: action.payload };
      state.list = [...state.list, action.payload];
    },
  },
});
export const { addMovie } = moviesSlice.actions;

export default moviesSlice.reducer;
