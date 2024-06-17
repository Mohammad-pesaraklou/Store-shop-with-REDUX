import { createSlice } from "@reduxjs/toolkit";
import { SumQuantity, sumPrice } from "../../Helper/function";

const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  total: 0,
  checkout: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      if (!state.selectedItems.find((i) => i.id === action.payload.id)) {
        state.selectedItems.push({
          ...action.payload,
          quantity: 1,
        });
        state.total = sumPrice(state.selectedItems);
        state.itemsCounter = SumQuantity(state.selectedItems);
        state.checkout = false;
      }
    },
    removeItem: (state, action) => {
      const newItems = state.selectedItems.filter(
        (i) => i.id !== action.payload.id
      );
      state.selectedItems = newItems;
      state.total = sumPrice(state.selectedItems);
      state.itemsCounter = SumQuantity(state.selectedItems);
    },
    increase: (state, action) => {
      const indexI = state.selectedItems.findIndex(
        (i) => i.id === action.payload.id
      );
      state.selectedItems[indexI].quantity++;
      state.total = sumPrice(state.selectedItems);
      state.itemsCounter = SumQuantity(state.selectedItems);
    },
    decrease: (state, action) => {
      const indexD = state.selectedItems.findIndex(
        (i) => i.id === action.payload.id
      );
      state.selectedItems[indexD].quantity--;
      state.total = sumPrice(state.selectedItems);
      state.itemsCounter = SumQuantity(state.selectedItems);
    },
  },
});

export default cartSlice.reducer;
export const { addItem, removeItem, increase, decrease } = cartSlice.actions;
