import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";
const initialState = {
  message: "",
  isAuthenticated:
    JSON.parse(localStorage.getItem("isAuthenticated")) === true ? true : false,
  isError: false,
  isSuccess: false,
  isLogin: false,
  isSignup: false,
};

export const registerUser = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      const response = await authService.register(user);
      return response.data;
    } catch (err) {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const logInUser = createAsyncThunk(
  "auth/logIn",
  async (user, thunkAPI) => {
    try {
      const response = await authService.logIn(user);
      return response.data;
    } catch (err) {
      const message =
        (err.response &&
          err.response.data &&
          err.response.data.message &&
          err.response.message) ||
        err.message ||
        err.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.isAuthenticated = true;
      localStorage.setItem("isAuthenticated", "true");
      state.message = action.payload;
      state.isSuccess = true;
      state.isError = false;
      state.isLogin = false;
      state.isSignup = true;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.isAuthenticated = false;
      state.message = action.payload;
      state.isSuccess = false;
      state.isError = true;
      state.isLogin = false;
      state.isSignup = true;
    });

    builder.addCase(logInUser.fulfilled, (state, action) => {
      state.isAuthenticated = true;
      localStorage.setItem("isAuthenticated", "true");
      state.message = action.payload;
      state.isLogin = true;
      state.isSignup = false;
    });
    builder.addCase(logInUser.rejected, (state, action) => {
      state.message = action.payload;

      state.isAuthenticated = false;
      localStorage.setItem("isAuthenticated", "false");
      state.isLogin = true;
      state.isSignup = false;
    });
  },
});

export default authSlice.reducer;
