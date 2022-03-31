import { createSlice } from "@reduxjs/toolkit";

export interface User {
  isAuth: boolean;
  user?: { name: string };
}

const initialState: User = {
  isAuth: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signin: (state) => {
      return (state = { isAuth: true, user: { name: "Promise" } });
    },
    signout: (state) => {
      return (state = { isAuth: false });
    },
  },
});

export const { signin, signout } = authSlice.actions;

export default authSlice.reducer;
