import { createSlice } from "@reduxjs/toolkit";
import { FashionShopProducts } from "../data/FashionShopProducts";
import { fashion } from "../data/Fashion";

const fashionProductSlice = createSlice({
  name: "Fashion-products",
  initialState: [fashion],
  reducers: {
    addProduct: (state, action) => {
      return state;
    },
  },
});
export const fashionProductAction = fashionProductSlice.actions;
export default fashionProductSlice;
