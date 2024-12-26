import { createSlice } from "@reduxjs/toolkit";
import { FashionShops, titleContent } from "../data/FashionShops";
import { fashion } from "../data/Fashion";

const fashionShopSlice = createSlice({
  name: "fashion-shop",
  initialState: [fashion],
  reducers: {
    // initialFashionShops: (state) => {
    //   return state;
    // },
  },
});
export const fashionShopAction = fashionShopSlice.actions;

export default fashionShopSlice;
