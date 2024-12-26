import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    },
    removeFromCart(state, action) {
      return state.filter((item) => item !== action.payload);
    },
    placeOrder(state) {
      return (state = []);
    },
  },
});
export const cartAction = cartSlice.actions;
export default cartSlice;
