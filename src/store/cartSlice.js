import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {},
  reducers: {
    addToCart: (state, action) => {
      const { id } = action.payload;
      state[id] = (state[id] || 0) + 1;
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      const newQty = Math.max((state[id] || 0) - 1, 0);
      if (newQty === 0) delete state[id];
      else state[id] = newQty;
    },
    deleteFromCart: (state, action) => {
      const { id } = action.payload;
      delete state[id];
    },
    clearCart: (state) => {
      return {};
    },
  },
});

export const { addToCart, removeFromCart, deleteFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;