import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { auth } from "../../models/auth";

interface authState {
  User: auth;
}

const initialState: authState = {
  User: {
    documento: "",
    cdo: 0,
    clave: "",
    idRol: 0,
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSlice: (state, action: PayloadAction<any>) => {
      state.User = action.payload;
    },
  },
});

export const { loginSlice } = authSlice.actions;
export default authSlice.reducer;