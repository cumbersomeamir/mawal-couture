import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import authReducer from './slices/authSlice';
import productsReducer from './slices/productsSlice';
import uiReducer from './slices/uiSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    products: productsReducer,
    ui: uiReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Persist cart to localStorage
if (typeof window !== 'undefined') {
  const saved = localStorage.getItem('mawal_cart');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      store.dispatch({ type: 'cart/replace', payload: parsed });
    } catch (e) {
      // ignore
    }
  }
  store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem('mawal_cart', JSON.stringify(state.cart.items));
  });
}

