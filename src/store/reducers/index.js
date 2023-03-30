import { combineReducers } from '@reduxjs/toolkit';
import authSlice from '../slices/authSlice';
import cartSlice from '../slices/cartSlice';
import uiSlice from '../slices/uiSlice';

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  cart: cartSlice.reducer,
  ui: uiSlice.reducer,
});

export default rootReducer;