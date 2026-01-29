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
    login(state, action: PayloadAction<{ name: string; email: string }>) {
      state.loading = false;
      state.user = {
        id: Date.now().toString(),
        name: action.payload.name,
        email: action.payload.email
      };
    },
    signOut(state) {
      state.user = null;
    }
  }
});

export const { signInStart, signInSuccess, login, signOut } = authSlice.actions;
export default authSlice.reducer;
