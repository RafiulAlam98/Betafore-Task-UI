import { apiSlice } from '../api/apiSlice';
import { configureStore } from '@reduxjs/toolkit';
import cartSlice from "../features/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
});
export default store;
