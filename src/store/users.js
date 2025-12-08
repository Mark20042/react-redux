import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (obj, { rejectWithValue }) => {
    // can get access to another reducer here
    // thunkAPI.dispatch(testAsyncDispatch());
    // console.log(thunkAPI.getState());

    try {
      const response = await api.get("/users");
      return response.data;
    } catch (error) {
      return rejectWithValue("Cant find users");
    }
  }
);

export const fetchOneUser = createAsyncThunk(
  "users/fetchOneUser",
  async (obj, { rejectWithValue }) => {
    try {
      const response = await api.get(`/users/${obj.id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue("Cant find this user");
    }
  }
);

export const usersSlice = createSlice({
  // name of the slice
  name: "users",
  // use useSelector to get the state
  initialState: {
    type: "Guests",
    users: [],
    oneUser: null,
    status: "",
    error: null,
    test: false,
  },
  // use dispatch to change the state
  reducers: {
    setType: (state, action) => {
      state.type = action.payload;
    },
    addUser: (state, action) => {
      state.users = [...state.users, action.payload];
    },
    testAsyncDispatch: (state) => {
      state.test = true;
    },
  },

  // to get data from API or other sources
  extraReducers: (builder) => {
    builder
      // all users
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.error = action.payload;
        state.status = "failed";
      })

      // one user
      .addCase(fetchOneUser.pending, (state) => {
        state.status = "loading";
        state.oneUser = null;
        state.error = null; // reset error
      })
      .addCase(fetchOneUser.fulfilled, (state, action) => {
        state.oneUser = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchOneUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { addUser, setType, testAsyncDispatch } = usersSlice.actions;

export default usersSlice.reducer;
