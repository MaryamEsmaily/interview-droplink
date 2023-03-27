import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: +localStorage.getItem("cartCount") ?? 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state) => {
      state.count += 1;
      localStorage.setItem("cartCount", state.count);
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
