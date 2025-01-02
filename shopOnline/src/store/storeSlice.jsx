import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { cart: [] },
  reducers: {
    addToCart: (state, action) => {
      let cart = [...state.cart, action.payload];

      return { ...state, cart };
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
