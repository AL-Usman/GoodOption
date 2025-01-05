import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import furnitureSlice from "./furnitureSlice";
import fashionSlice from "./fashionSlice";
import electronicsSlice from "./electronicsSlice";

const goodOption = configureStore({
  reducer: {
    fashionSlice: fashionSlice.reducer,
    furnitureSlice: furnitureSlice.reducer,
    electronicsSlice: electronicsSlice.reducer,
    cartsSlice: cartSlice.reducer,
  },
});

export default goodOption;
