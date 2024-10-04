// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer'; // Import your root reducer

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    // Add any middleware or devTools configuration here if needed
  });
};
