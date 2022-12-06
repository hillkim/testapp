import {
  attemptLogin,
  attemptSignUp,
  setLogin,
  setLogout,
  setRunning,
} from './actions';
import {createAccount, login} from '../api';

import {Middleware} from '@reduxjs/toolkit';

const headers = {
  api_key: 'c008 2183-35d6-4d39-ac7b-819c546c3b73',
  secret_key: 'ecf3ff4a-78d8-4362-9824-3fd272bb3499',
};
export const userMiddleware: Middleware =
  ({dispatch}) =>
  next =>
  action => {
    next(action);

    if (attemptLogin.match(action)) {
      const {email, password} = action.payload;

      login(email, password, false, headers)
        .then(() => dispatch(setLogin(email, false)))
        .catch(err => dispatch(setLogout('denied', err.message)));
    }

    if (attemptSignUp.match(action)) {
      const {email, password} = action.payload;

      createAccount(email, password, false, headers)
        .then(() => dispatch(setLogin(email, true)))
        .catch(err => dispatch(setLogout('denied', err.message)));
    }

    if (setLogout.match(action)) {
      dispatch(setRunning(false));
    }
  };
