import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    isDarkTheme:
      JSON.parse(localStorage.getItem("isDarktheme")) === true ? true : false,
  },
  reducers: {
    toggleTheme: (state) => {
      const newTheme = !state.isDarkTheme; // Toggle the value

      localStorage.setItem("isDarktheme", newTheme); // Update the localStorage

      state.isDarkTheme = newTheme; // Update the state
    },
    revokeDarkTheme: (state) => {
      localStorage.removeItem("isDarkTheme");
      state.isDarkTheme = false;
    },
  },
});

export const { toggleTheme, revokeDarkTheme } = themeSlice.actions;

export default themeSlice.reducer;
