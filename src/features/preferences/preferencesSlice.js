import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import preferencesService from "./preferencesService";

const initialState = {
  preferences: [],
  isLoading: false,
};

export const fetchUserPerefences = createAsyncThunk(
  "pereferences/fetch",
  async (thunkAPI) => {
    try {
      const response = await preferencesService.fetchPreferences();
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

export const preferencesSlice = createSlice({
  name: "preferences",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserPerefences.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUserPerefences.fulfilled, (state, action) => {
      state.isLoading = false;

      state.preferences = action.payload;
    });
    builder.addCase(fetchUserPerefences.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export default preferencesSlice.reducer;
