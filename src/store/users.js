import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    type: "Guests",
    users: [],
  },
  reducers: {
    setType: (state, action) => {
      state.type = action.payload || "Guests";
    },
    addUser: (state, action) => {
      state.users = [...state.users, action.payload];
    },
  },
});
export const { addUser, setType } = usersSlice.actions;

export default usersSlice.reducer;
