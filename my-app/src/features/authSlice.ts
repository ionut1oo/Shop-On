// authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isAuthenticated: boolean;
  user: any;
  error: string;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  error: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<any>) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    loginFailed: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const { loginSuccess, loginFailed } = authSlice.actions;

export default authSlice.reducer;
