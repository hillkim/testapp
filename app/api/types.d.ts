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
type ItemData = {
  id: string;
  title: string;
  description: string;
  featuredImage: string;
  images: string[];
};

type ProfileData = {
  id: string;
  name: string;
  email: string;
  bio: string;
  profileImage: string;
};
type Homelist = {
  id: string;
  title: string;
  description: string;
  featuredImage: string;
};

type HomeData = {
  hero: Homelist;
  items?: Homelist[];
};

type SuccessValue = AuthSuccess | UserData | HomeData | ItemData | ProfileData;

type FailureValue = {
  error: number;
  message: string;
};

type mockRequestValue = SuccessValue | FailureValue;
