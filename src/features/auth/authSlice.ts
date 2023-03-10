import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { auth } from "../../models/auth";

interface authState {
  User: auth;
  Login: boolean
}

const initialState: authState = {
  User: {
    Documento: "",
    Cdo: "",
  },
  Login: false
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSlice: (state, action: PayloadAction<boolean>) => {
      state.Login = action.payload;
    },
  },
});

export const { loginSlice } = authSlice.actions;
export default authSlice.reducer;