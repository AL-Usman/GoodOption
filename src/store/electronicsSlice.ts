import { createSlice } from "@reduxjs/toolkit";
import { Shops } from "../data/Shops";

const electronicsSlice = createSlice({
  name: "electronics",
  initialState: [Shops],
  reducers: {},
});
export const electronicsAction = electronicsSlice.actions;
export default electronicsSlice;
