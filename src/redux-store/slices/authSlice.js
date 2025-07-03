import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "counter",
  initialState: {
    userData: JSON.parse(localStorage.getItem("localUserData")) || null,
  },
  reducers: {
    signedUser: (state, actions) => {
      state.userData = actions.payload
      localStorage.setItem("localUserData",JSON.stringify(actions.payload))
    
    },
  },
});

// Action creators are generated for each case reducer function
export const { signedUser } = authSlice.actions;

export default authSlice.reducer;



