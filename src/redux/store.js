import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../features/auth/authSlice";
import articlesReducer from "../features/articles/articleSlice";
import themeReducer from "../features/theme/themeSlice";
import PreferecesReducer from '../features/preferences/preferencesSlice'

export default configureStore({
  reducer: {
    auth: authReducer,
    articles: articlesReducer,
    theme:themeReducer,
    preferences:PreferecesReducer,
  },
});
