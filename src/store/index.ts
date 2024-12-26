import { configureStore } from "@reduxjs/toolkit";
import fashionShopSlice from "./fashionShopSlice";
import fashionProductSlice from "./fashionProducts";
import cartSlice from "./cartSlice";

const goodOption = configureStore({
  reducer: {
    fashionShopsSlice: fashionShopSlice.reducer,
    fashionProductSlice: fashionProductSlice.reducer,
    cartsSlice: cartSlice.reducer,
  },
});

export default goodOption;
