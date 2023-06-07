import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "authenticated",
  initialState: "",
  reducers: {
    toggleAuth: (state, action) => {
      let aunticated = action.payload.booleanValue;
      state = aunticated;
      return state;
    },
  },
});

export const { toggleAuth } = authSlice.actions;
export default authSlice.reducer;
