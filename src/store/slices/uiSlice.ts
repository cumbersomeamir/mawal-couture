import { createSlice } from '@reduxjs/toolkit';

type UIState = {
  mobileNavOpen: boolean;
  signInOpen: boolean;
  signUpOpen: boolean;
  cartOpen: boolean;
};

const initialState: UIState = {
  mobileNavOpen: false,
  signInOpen: false,
  signUpOpen: false,
  cartOpen: false
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleMobileNav(state) {
      state.mobileNavOpen = !state.mobileNavOpen;
    },
    openSignIn(state) {
      state.signInOpen = true;
      state.signUpOpen = false;
    },
    closeSignIn(state) {
      state.signInOpen = false;
    },
    openSignUp(state) {
      state.signUpOpen = true;
      state.signInOpen = false;
    },
    closeSignUp(state) {
      state.signUpOpen = false;
    },
    toggleCart(state) {
      state.cartOpen = !state.cartOpen;
    },
    openCart(state) {
      state.cartOpen = true;
    },
    closeCart(state) {
      state.cartOpen = false;
    }
  }
});

export const { 
  toggleMobileNav, 
  openSignIn, 
  closeSignIn, 
  openSignUp, 
  closeSignUp, 
  toggleCart, 
  openCart, 
  closeCart 
} = uiSlice.actions;
export default uiSlice.reducer;
