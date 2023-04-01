import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    itemsList: [],
    totalQuantity: 0,
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;

      state.itemsList.push({
        id: newItem.id,
        price: newItem.price,
        quantity: 1,
        totalPrice: newItem.price,
        name: newItem.name,
      });
      state.totalQuantity++;
    },
  }
});

const cartAction = cartSlice.actions;
const cartReducer = cartSlice.reducer;

export {
  cartAction,
  cartReducer,
};