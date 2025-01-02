import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./storeSlice";

const store = configureStore({
  reducer: {
    counter: cartReducer,
  },
});

export default store;
