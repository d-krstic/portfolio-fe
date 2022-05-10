import { createSlice } from '@reduxjs/toolkit';

import userStorage from '../../utils/localStorage';
import { loginSuccess, logout } from '../actions/authActions';
import { User } from '../models/Auth';

export interface AuthState {
  user: User;
}

const defaultUserValues: User = {
  token: null,
};

const initialState: AuthState = {
  user: userStorage.getUser() || defaultUserValues,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginSuccess, (state, action) => {
        userStorage.setUser(action.payload);
        state.user = action.payload;
      })
      .addCase(logout, (state) => {
        state.user = null;
        localStorage.clear();
      });
  },
});

export default authSlice.reducer;
