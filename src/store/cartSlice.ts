import { createSlice } from "@reduxjs/toolkit";

interface CartItem {
  sId: number;
  pId: number;
}

const cartSlice = createSlice({
  name: "cart",
  initialState: [] as CartItem[],
  reducers: {
    addToCart(state, action) {
      state.push({
        sId: action.payload.sId,
        pId: action.payload.pId,
      });
    },
    removeFromCart(state, action) {
      return state.filter(
        (item) => item.sId !== action.payload && item.pId !== action.payload
      );
    },
    placeOrder(_state) {
      return [];
    },
  },
});
export const cartAction = cartSlice.actions;
export default cartSlice;
