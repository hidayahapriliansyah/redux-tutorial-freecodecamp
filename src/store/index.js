import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './authSlice';
import { cartReducer } from './cartSlice';
import { drawerReducer } from './drawerSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    drawer: drawerReducer,
  },
});

export default store;
