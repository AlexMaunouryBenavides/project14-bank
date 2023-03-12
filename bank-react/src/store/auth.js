import { createSlice } from "@reduxjs/toolkit";

// Initial state for auth
const initialAuthState = { isAuth: false };

/**
 * Auth Slice
 *
 */
const authSlice = createSlice({
   name: "auth",

   initialState: initialAuthState,
   reducers: {
      login(state) {
         state.isAuth = true;
      },
      logout(state) {
         state.isAuth = false;
      },
   },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
