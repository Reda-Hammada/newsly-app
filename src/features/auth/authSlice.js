import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";
const initialState = {
  isError: false,
  isSuccess: false,
  message: "",
};

export const registerUser = createAsyncThunk("auth/register", async (user) => {
  try {
    return await authService.register(user);
  } catch (err) {
    const message =
      (err.response && err.response.data && err.response.data.message) ||
      err.message ||
      err.toString();

    throw new Error(message);
  }
});

export const logInUser = createAsyncThunk("auth/logIn", async (user) => {
  try {
    return await authService.logIn(user);
  } catch (err) {
    const message =
      (err.response && err.response.data && err.response.data.message) ||
      err.message ||
      err.toString();
    throw new Error(message);
  }
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.isSuccess = true;
      state.message = action.payload;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.isError = true;
      state.message = action.payload;
    });

    builder.addCase(logInUser.fulfilled, (state, action) => {
      state.isSuccess = true;
      state.message = action.payload;
    });
    builder.addCase(logInUser.rejected, (state, action) => {
      state.isError = true;
      state.message = action.payload;
    });
  },
});

export default authSlice.reducer;
