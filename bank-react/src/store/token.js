import { createSlice } from "@reduxjs/toolkit";

// Initial token's state
const initialTokenState = { token: undefined };

// Token's slice
const tokenSlice = createSlice({
   name: "token",
   initialState: initialTokenState,

   reducers: {
      getToken(state, action) {
         state.token = action.payload;
      },
      dropToken(state) {
         state.token = initialTokenState;
      },
   },
});

export const tokenActions = tokenSlice.actions;
export default tokenSlice.reducer;
