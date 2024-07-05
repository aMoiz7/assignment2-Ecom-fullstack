import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './../Slice/productSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
   
  },
});
