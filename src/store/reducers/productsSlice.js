import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  isLoading: false,
  error: "",
};

export const fetchGetProducts = createAsyncThunk(
  "products/fetchGetProducts",
  async (_, thunkAPI) => {
    const response = await axios.get("https://fakestoreapi.com/products");

    return response.data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchGetProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchGetProducts.fulfilled, (state, { payload }) => {
      state.products = payload;
      state.isLoading = false;
    });
    builder.addCase(fetchGetProducts.rejected, (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    });
  },
});

export default productsSlice.reducer;
