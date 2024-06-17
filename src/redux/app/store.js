import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice";
import productReducer from "../features/productSlice";
const store = configureStore({
  reducer: {
    productState: productReducer,
    cartState: cartReducer,
  },
});

export default store;
