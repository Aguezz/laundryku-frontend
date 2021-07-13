import { configureStore } from '@reduxjs/toolkit';
import appReducer from './features/app/app.slice';
import userReducer from './features/user/user.slice';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getPersistedState(): any {
  try {
    const localStorageState = localStorage.getItem('state');
    if (!localStorageState) return undefined;
    return JSON.parse(localStorageState);
  } catch (err) {
    localStorage.removeItem('state');
  }

  return undefined;
}

export const store = configureStore({
  reducer: { app: appReducer, user: userReducer },
  preloadedState: getPersistedState(),
});

store.subscribe(() => {
  localStorage.setItem('state', JSON.stringify(store.getState()));
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
