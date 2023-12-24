import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const item = state.cartItems.find((p) => p.id === action.payload.id); // returns true

      if (item) {
        quantity++;
        attributes.price = attributes.price * quantity;
      } 
      else {
        state.cartItems.push({ ...action.payload, quantity: 1 }); // pushing a new action to the array with a the quantity
      }
    },

    deleteCart: (state, action) => {
      state.cartItems = state.cartItems.filter((item) => {
        return item.id !== action.payload.id;
      });
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
