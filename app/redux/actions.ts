import {createAction, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState, LoginState} from './types';

export const setRunning = createAction(
  '[APPSTATE] Set Running',
  (running: boolean) => ({
    payload: {
      running,
    },
  }),
);

export const selectIsRunning = (state: RootState): boolean =>
  state.appState.isRunning;

/**
 * User Actions
 *
 */
export const setLogin = createAction(
  '[USER] Set Login',
  (email: string, newUser: boolean) => ({
    payload: {
      email,
      newUser,
    },
  }),
);

export const resetLogin = createAction('[USER] Reset Login');

export const setLogout = createAction(
  '[USER] Set Logout',
  (loginState?: LoginState, message?: string) => ({
    payload: {
      loginState,
      message,
    },
  }),
);

export const attemptLogin = createAction(
  '[USER] attempt Login',
  (email: string, password: string) => ({
    payload: {
      email,
      password,
    },
  }),
);

export const attemptSignUp = createAction(
  '[USER] attempt SignUp',
  (email: string, password: string) => ({
    payload: {
      email,
      password,
    },
  }),
);

export const selectLogin = (state: RootState): boolean => state.user.login;
export const selectLoginState = (state: RootState): string | undefined =>
  state.user.loginState;
export const selectIsSubmitting = (state: RootState): boolean =>
  state.user.loginState === 'loading';
export const selectLoginMessage = (state: RootState): string | undefined =>
  state.user.message;

export const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state, action: PayloadAction<number>) => state + action.payload,
    decrement: (state, action: PayloadAction<number>) => state - action.payload,
  },
});

export const {increment, decrement} = counterSlice.actions;
