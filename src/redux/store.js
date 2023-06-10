import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import articlesReducer from "../features/articles/articleSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    articles: articlesReducer,
  },
});
