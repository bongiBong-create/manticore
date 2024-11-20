import { createSlice } from "@reduxjs/toolkit";
import { API_FIREBASE } from "../constants/const";

const state = {
  cartProducts: [],
  productsQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: state,
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
    removeItem(state, action) {
      const id = action.payload.id;
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

export const sendCartData = (cart) => {
  return async (dispatchAction) => {
    const sendHttpRequest = async () => {
      const response = await fetch(API_FIREBASE, {
        method: "PUT",
        body: JSON.stringify({
          cartProducts: cart.cartProducts,
          productsQuantity: cart.productsQuantity,
          totalPrice: cart.totalPrice,
        }),
      });
    };

    try {
      await sendHttpRequest();
    } catch (error) {
      console.log(error);
    }
  };
};

export const getCartData = () => {
  return async (dispatchAction) => {
    const getHttpRequest = async () => {
      const response = await fetch(API_FIREBASE);

      const responseData = await response.json();
      return responseData;
    };

    try {
      const cart = await getHttpRequest();
      dispatchAction(
        cartSlice.actions.updateCart({
          cartProducts: cart.cartProducts || [],
          productsQuantity: cart.productsQuantity,
          totalPrice: cart.totalPrice,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export const cartActions = cartSlice.actions;

export default cartSlice;
