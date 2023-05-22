/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';
import { Response } from './reducers/userReducer';

type AuthState = {
  isAuth: boolean;
} & Response;

const user = JSON.parse(localStorage.getItem('user') || '{}');

const initialState = {
  user: {
    email: user?.email,
    mobile: user?.mobile,
    name: user?.name,
    surname: user?.surname,
  },
  token: localStorage.getItem('token'),
  isAuth: !!localStorage.getItem('token'),
} as AuthState;

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials(state, action) {
      if (action.payload) {
        localStorage.setItem('token', action.payload.token);
        localStorage.setItem('user', JSON.stringify(action.payload.user));
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuth = true;
      }
    },
    logout(state) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      state.isAuth = false;
    },
  },
});

export const { setCredentials, logout } = slice.actions;

export default slice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth;
