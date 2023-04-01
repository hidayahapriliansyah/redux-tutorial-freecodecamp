import { createSlice } from '@reduxjs/toolkit';

const drawerSlice = createSlice({
  name: 'drawer',
  initialState: {
    cartDrawer: false,
  },
  reducers: {
    showCart(state) {
      state.cartDrawer = !state.cartDrawer;
    },
  },
});

const drawerAction = drawerSlice.actions;
const drawerReducer = drawerSlice.reducer;
export {
  drawerAction,
  drawerReducer,
};