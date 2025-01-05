import { createSlice } from "@reduxjs/toolkit";
import { Shops } from "../data/Shops";

const furnitureSlice = createSlice({
  name: "Furniture",
  initialState: [Shops],
  reducers: {},
});
export const furnitureAction = furnitureSlice.actions;
export default furnitureSlice;
