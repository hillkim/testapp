import {createReducer, combineReducers} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';
import {
  setRunning,
  attemptLogin,
  attemptSignUp,
  resetLogin,
  setLogin,
  setLogout,
  counterSlice,
} from './actions';
import {AppState} from './types';

const initialState: AppState = {
  isRunning: false,
  login: false,
  loginState: undefined,
  message: undefined,
};

export const appStateReducer = createReducer(initialState, builder => {
  builder.addCase(setRunning, (_state, action) => {
    const {running} = action.payload;
    return {
      isRunning: running,
      login: false,
      loginState: undefined,
      message: undefined,
    };
  });
});

export const counterReducer = counterSlice.reducer;

const userReducer = createReducer(initialState, builder => {
  builder.addCase(setLogin, (_state, action) => {
    const {email, newUser} = action.payload;
    return {
      isRunning: false,
      login: true,
      loginState: 'loggedOut',
      message: undefined,
      email,
      newUser,
    };
  });
  builder.addCase(resetLogin, () => {
    return {
      isRunning: false,
      login: false,
      loginState: undefined,
      message: undefined,
    };
  });
  builder.addCase(setLogout, (_state, action) => {
    const {loginState, message} = action.payload;
    return {
      isRunning: false,
      login: false,
      loginState,
      message,
    };
  });
  builder.addCase(attemptLogin, (_state, action) => {
    const {email, password} = action.payload;
    return {
      isRunning: true,
      login: false,
      loginState: 'loggingIn',
      message: undefined,
      email,
      password,
    };
  });
  builder.addCase(attemptSignUp, (_state, action) => {
    const {email, password} = action.payload;
    return {
      isRunning: true,
      login: false,
      loginState: 'signingUp',
      message: undefined,
      email,
      password,
    };
  });
});

export const rootReducer = combineReducers({
  appState: appStateReducer,
  user: userReducer,
  counter: counterReducer,
});

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
  whitelist: ['user'],
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);
