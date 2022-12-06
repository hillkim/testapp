import {faker} from '@faker-js/faker';

const mockSuccess = (value: SuccessValue): Promise<SuccessValue> => {
  return new Promise(resolve => {
    setTimeout(() => resolve(value), 2000);
  });
};

const mockFailure = (value: FailureValue): Promise<FailureValue> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(value), 2000);
  });
};

const fakeUserData: UserData[] = [
  {
    id: 'u0001',
    name: 'Bobette Bobson',
    email: 'bobette@bob.test',
    password: 'test123',
    settings: {
      language: 'english',
      music: 0,
      theme: 'dark',
    },
  },
  {
    id: 'u0002',
    name: 'Hans Wurst',
    email: 'hans@wurst.de',
    password: 'wiener',
    settings: {
      language: 'deutsch',
      music: 5,
      theme: 'light',
    },
  },
];

const mockCheckLoginData = (email: string, password: string): boolean =>
  fakeUserData.filter(
    data => data.email === email && data.password === password,
  ).length > 0;

export const login = (
  email: string,
  password: string,
  shouldFail = false,
  headers: {
    api_key: string;
    secret_key: string;
  },
): Promise<mockRequestValue> => {
  if (shouldFail) {
    return mockFailure({error: 500, message: 'Request failed!'});
  }

  const mock_api_key = 'c008 2183-35d6-4d39-ac7b-819c546c3b73';
  const mock_secret_key = 'ecf3ff4a-78d8-4362-9824-3fd272bb3499';

  if (
    headers.api_key !== mock_api_key &&
    headers.secret_key !== mock_secret_key
  ) {
    return mockFailure({error: 401, message: 'Unauthorized'});
  }

  if (!mockCheckLoginData(email, password)) {
    return mockFailure({
      error: 401,
      message: 'Login failed, email or password did not match!',
    });
  }

  return mockSuccess({authToken: 'mock_token_value'});
};

export const createAccount = (
  email: string,
  password: string,
  shouldFail = false,
  headers: {
    api_key: string;
    secret_key: string;
  },
): Promise<mockRequestValue> => {
  if (shouldFail) {
    return mockFailure({error: 500, message: 'Request failed successfully!'});
  }
  const mock_api_key = 'c008 2183-35d6-4d39-ac7b-819c546c3b73';
  const mock_secret_key = 'ecf3ff4a-78d8-4362-9824-3fd272bb3499';

  if (
    headers.api_key !== mock_api_key &&
    headers.secret_key !== mock_secret_key
  ) {
    return mockFailure({error: 401, message: 'Unauthorized'});
  }

  return mockSuccess({authToken: 'mock_token_value'});
};

export const getUserData = (
  email: string,
  shouldFail = false,
): Promise<mockRequestValue> => {
  if (shouldFail) {
    return mockFailure({error: 401, message: 'Invalid Request'});
  }

  return mockSuccess(fakeUserData.filter(data => data.email === email)[0]);
};

// Mock api to get home page data an array of 10 items

export const getHomeData = (
  shouldFail = false,
  authToken: string,
): Promise<mockRequestValue> => {
  // `Token tokenForExample` is a mock token value check token
  // value in your api to verify if the user is logged in

  const token = authToken.split(' ')[1];

  if (!token || token !== 'tokenForExample') {
    return mockFailure({error: 401, message: 'Invalid Request'});
  }

  if (shouldFail) {
    return mockFailure({error: 401, message: 'Invalid Request'});
  }

  let data: HomeData = {
    hero: {
      id: faker.datatype.uuid(),
      title: faker.address.city(),
      description: faker.company.catchPhrase(),
      featuredImage: faker.image.abstract(400, 400, true),
    },
    items: [],
  };

  for (let i = 0; i < 10; i++) {
    data?.items?.push({
      id: faker.datatype.uuid(),
      title: faker.address.city(),
      description: faker.company.catchPhrase(),
      featuredImage: faker.image.abstract(400, 400, true),
    });
  }

  return mockSuccess(data);
};

// Mock api for a single item page data given item id

export const getItemData = (
  id: string,
  shouldFail = false,
): Promise<mockRequestValue> => {
  if (shouldFail) {
    return mockFailure({error: 401, message: 'Invalid Request'});
  }
  if (!id) {
    return mockFailure({error: 404, message: 'Item not found'});
  }

  let data: ItemData = {
    id: faker.datatype.uuid(),
    title: faker.address.city(),
    description: faker.lorem.paragraphs(3),
    featuredImage: faker.image.abstract(400, 400, true),
    images: [],
  };

  for (let i = 0; i < 8; i++) {
    data?.images?.push(faker.image.abstract(400, 400, true));
  }

  return mockSuccess(data);
};

export const getProfileData = (
  id: string,
  shouldFail = false,
): Promise<mockRequestValue> => {
  if (shouldFail) {
    return mockFailure({error: 401, message: 'Invalid Request'});
  }
  if (!id) {
    return mockFailure({error: 404, message: 'Item not found'});
  }

  let data: ProfileData = {
    id: faker.datatype.uuid(),
    name: faker.name.lastName() + ', ' + faker.name.firstName(),
    email: faker.internet.email(),
    bio: faker.lorem.paragraphs(3),
    profileImage: faker.internet.avatar(),
  };

  return mockSuccess(data);
};
