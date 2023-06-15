import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import articlesService from "./articlesService";
const initialState = {
  articles: [],
  isLoading: false,
  categories: [],
  error: false,
  isPersonalizedFeed: false,
  isSearchAndFilter: false,
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

// available categories
export const availableCategories = createAsyncThunk(
  "articles/availableCategories",
  async () => {
    try {
      return await articlesService.fetchAvailabaleCategory();
    } catch (err) {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();

      throw new Error(message);
    }
  }
);

export const searchAndFilter = createAsyncThunk(
  "articles/search",
  async (data) => {
    try {
      const response = await articlesService.fetchArticlesByKeywordAndFilter(
        data
      );

      return response;
    } catch (err) {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();

      throw new Error(message);
    }
  }
);
export const personalizedFeed = createAsyncThunk(
  '"articles/user"',
  async (preferences) => {
    try {
      const response = await articlesService.fetchPersonalizedFeed(preferences);
      return response;
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
    builder.addCase(availableCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
    builder.addCase(searchAndFilter.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(searchAndFilter.rejected, (state, action) => {
      state.isLoading = false;
      state.articles = [];
    });
    builder.addCase(searchAndFilter.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isPersonalizedFeed = false;
      state.isSearchAndFilter = true;
      state.articles = {
        ...action.payload.articlesBySource,
        ...action.payload.articlesByCategory,
      };
    });
    builder.addCase(personalizedFeed.pending, (state, action) => {
      state.isLoading = true;
      state.isSearchAndFilter = false;
      state.isPersonalizedFeed = true;
    });
    builder.addCase(personalizedFeed.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSearchAndFilter = false;
      state.isPersonalizedFeed = true;
      state.articles = action.payload;
    });
    builder.addCase(personalizedFeed.rejected, (state, action) => {
      state.error = true;
    });
  },
});

export default articlesSlice.reducer;
