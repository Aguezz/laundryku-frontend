import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import User from '../../models/user.model';

interface UserState {
  isAuthenticated: boolean;
  user: User | Record<string, never>;
}

const initialState: UserState = {
  isAuthenticated: false,
  user: {},
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      if (action.payload.id) {
        state.isAuthenticated = true;
        state.user = action.payload;
      }
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = {};
    },
  },
});

export const { logout, setUser } = userSlice.actions;

export const isAuthenticated = (state: RootState): boolean =>
  state.user.isAuthenticated;

export const getUser = (state: RootState): User | Record<string, never> =>
  state.user.user;

export default userSlice.reducer;
