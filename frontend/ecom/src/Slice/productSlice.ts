import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
        //@ts-ignore
      state.cartItems.push(action.payload);
    },
    removeFromCart: (state, action) => {
         //@ts-ignore
      state.cartItems = state.cartItems.filter(item => item.name !== action.payload.name);
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
 //@ts-ignore
export const selectCartItems = state => state.cart.cartItems;

export default cartSlice.reducer;
