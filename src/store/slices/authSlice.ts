import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type User = {
  id: string;
  name: string;
  email?: string;
};

type AuthState = {
  user: User | null;
  loading: boolean;
};

const initialState: AuthState = {
  user: null,
  loading: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signInStart(state) {
      state.loading = true;
    },
    signInSuccess(state, action: PayloadAction<User>) {
      state.loading = false;
      state.user = action.payload;
    },
    signOut(state) {
      state.user = null;
    }
  }
});

export const { signInStart, signInSuccess, signOut } = authSlice.actions;
export default authSlice.reducer;
