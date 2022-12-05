import {
  attemptLogin,
  attemptSignUp,
  setLogin,
  setLogout,
  setRunning,
} from './actions';
import {createAccount, login} from '../api';

import {Middleware} from '@reduxjs/toolkit';

export const userMiddleware: Middleware =
  ({dispatch}) =>
  next =>
  action => {
    next(action);

    if (attemptLogin.match(action)) {
      const {email, password} = action.payload;

      login(email, password)
        .then(() => dispatch(setLogin(email, false)))
        .catch(err => dispatch(setLogout('denied', err.message)));
    }

    if (attemptSignUp.match(action)) {
      const {email, password} = action.payload;

      createAccount(email, password)
        .then(() => dispatch(setLogin(email, true)))
        .catch(err => dispatch(setLogout('denied', err.message)));
    }

    if (setLogout.match(action)) {
      dispatch(setRunning(false));
    }
  };
