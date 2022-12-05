import {rootReducer} from './reducers';

type AppState = {
  login: boolean;
  loginState: string | undefined;
  message: string | undefined;
  isRunning: boolean;
};

export type RootState = ReturnType<typeof rootReducer>;

// user states
type LoginState = 'init' | 'loading' | 'denied' | 'loggedOut';

type UserState = {
  login: boolean;
  loginState?: LoginState;
  email?: string;
  newUser?: boolean;
  message?: string;
};

export const initialState: UserState = {
  login: false,
  loginState: 'init',
};
