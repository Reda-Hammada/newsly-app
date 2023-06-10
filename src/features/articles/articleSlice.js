import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import articlesService from "./articlesService";
const initialState = {
  articles: [],
  isLoading: false,
};

// ariticles for non authenticated users
export const articlesForVisitor = createAsyncThunk(
  "articles/visitor",
  async () => {
    try {
      return await articlesService.fetchArtilesForVisitor();
    } catch (err) {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();

      throw new Error(message);
    }
  }
);

export const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(articlesForVisitor.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(articlesForVisitor.fulfilled, (state, action) => {
      state.isLoading = false;
      state.articles = action.payload;
    });
    builder.addCase(articlesForVisitor.rejected, (state, action) => {
      state.isLoading = false;
      state.articles = [];
    });
  },
});

export default articlesSlice.reducer;
