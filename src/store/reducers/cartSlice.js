import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartProducts: [],
  productsQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartProducts.find(
        (item) => item.id === newItem.id
      );
      state.productsQuantity += 1;
      state.totalPrice += newItem.price;
      if (!existingItem) {
        state.cartProducts.push({
          ...newItem,
          totalPrice: newItem.price,
          amount: 1,
        });
      } else {
        existingItem.amount += 1;
        existingItem.totalPrice = existingItem.price * existingItem.amount;
      }
    },
    removeItem(state, { payload }) {
      const id = payload;
      const existingItem = state.cartProducts.find((item) => item.id === id);
      state.productsQuantity -= 1;
      state.totalPrice -= existingItem.price;

      if (existingItem.amount === 1) {
        state.cartProducts = state.cartProducts.filter(
          (item) => item.id !== id
        );
      } else {
        existingItem.amount -= 1;
        existingItem.totalPrice -= existingItem.price;
      }
    },
    updateCart(state, action) {
      state.cartProducts = action.payload.cartProducts;
      state.productsQuantity = action.payload.productsQuantity;
      state.totalPrice = action.payload.totalPrice;
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
