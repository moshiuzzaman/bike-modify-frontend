import { createSlice } from '@reduxjs/toolkit';
import jwt_decode from 'jwt-decode';

interface IUser {
  token: string | null;
  info: any | null;
}

const initialState: IUser = {
  token: null,
  info: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload;
      localStorage.setItem('token', action.payload);
      state.info = jwt_decode(action.payload);
    },
    logout: (state) => {
      state.token = null;
      localStorage.removeItem('token');
      state.info = null;
    },
  },
});

export const { login,logout } = userSlice.actions;

export default userSlice.reducer;
