import { createSlice } from "@reduxjs/toolkit";
import { Shops } from "../data/Shops";

const fashionSlice = createSlice({
  name: "Fashion",
  initialState: [Shops],
  reducers: {},
});
export const fashionAction = fashionSlice.actions;
export default fashionSlice;
