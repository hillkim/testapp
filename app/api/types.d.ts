type AuthSuccess = {
  authToken: string;
};

type UserData = {
  id: string;
  name: string;
  email: string;
  password: string;
  settings: {
    language:
      | 'english'
      | 'deutsch'
      | 'français'
      | 'israel'
      | 'עברית'
      | '日本語';
    music: 0 | 1 | 2 | 3 | 4 | 5;
    theme: 'dark' | 'light';
  };
};

type SuccessValue = AuthSuccess | UserData;

type FailureValue = {
  error: number;
  message: string;
};

type mockRequestValue = SuccessValue | FailureValue;
