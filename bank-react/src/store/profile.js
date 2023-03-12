// Create slice for the profile
import { createSlice } from "@reduxjs/toolkit";

// Initial state for profile
const initialProfileState = {
   firstName: undefined,
   lastName: undefined,
};

// Profile's slice
const profileSlice = createSlice({
   name: "profile",
   initialState: initialProfileState,
   reducers: {
      getNames(state, action) {
         state.firstName = action.payload.firstName;
         state.lastName = action.payload.lastName;
      },
   },
});

export const profileActions = profileSlice.actions;

export default profileSlice.reducer;
