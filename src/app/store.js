import { configureStore } from '@reduxjs/toolkit';
import ordersReducer from '../features/orderTable/orderSlice';

export const store = configureStore({
  reducer: {
    orders: ordersReducer
  }
});
