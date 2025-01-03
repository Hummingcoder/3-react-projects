import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./storeSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
