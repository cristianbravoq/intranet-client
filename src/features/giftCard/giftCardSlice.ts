import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISendGiftCard } from "../../models/giftCard";

interface authState {
  Sidebar: {
    giftCard: ISendGiftCard
  }
}

const initialState: authState = {
  Sidebar: {
    giftCard: {
        nombre: "",
        telefono: "",
        correo: "",
        monto: "",
        referencia: ""
    }
  },
};

export const giftCardSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    insertDataSlice: (state, action: PayloadAction<ISendGiftCard>) => {
      state.Sidebar.giftCard = action.payload;
    },
  },
});

export const { insertDataSlice } = giftCardSlice.actions;
export default giftCardSlice.reducer;