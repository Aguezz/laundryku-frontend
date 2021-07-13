import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type NavigationItem = 0 | 1 | 2 | 3;

interface AppState {
  navigationAppears: boolean;
  navigationActiveItem: NavigationItem;
}

const initialState: AppState = {
  navigationAppears: true,
  navigationActiveItem: 0,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    hideNavigation: (state) => {
      state.navigationAppears = false;
    },
    showNavigation: (state) => {
      state.navigationAppears = true;
    },
    changeNavigationActiveItem: (
      state,
      action: PayloadAction<NavigationItem>,
    ) => {
      state.navigationActiveItem = action.payload;
    },
  },
});

export const { hideNavigation, showNavigation, changeNavigationActiveItem } =
  appSlice.actions;

export default appSlice.reducer;
