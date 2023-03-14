import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface authState {
  Sidebar: {
    open: boolean
  }
}

const initialState: authState = {
  Sidebar: {
    open: false
  },
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    openSlice: (state, action: PayloadAction<boolean>) => {
      state.Sidebar.open = action.payload;
    },
  },
});

export const { openSlice } = sidebarSlice.actions;
export default sidebarSlice.reducer;