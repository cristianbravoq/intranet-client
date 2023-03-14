import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import openReducer from "../features/sidebar/sidebarSlice";
import giftCardReducer from "../features/giftCard/giftCardSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    openSidebar: openReducer,
    giftCard: giftCardReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
