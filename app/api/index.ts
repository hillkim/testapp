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
): Promise<mockRequestValue> => {
  if (shouldFail) {
    return mockFailure({error: 500, message: 'Request failed successfully!'});
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
): Promise<mockRequestValue> => {
  if (shouldFail) {
    return mockFailure({error: 500, message: 'Request failed successfully!'});
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

// 1. There is a support system to design the dynamic homepage
// 2. API calls are executed in front of 2 servers :
// a. Login requests is from OPA-Server-A and the authorization process is using a special header :
// {"api_key":"c0082183-35d6-4d39-ac7b-819c546c3b73","secret_key":"ecf3ff4a-78d8-4362-9824-3fd272 bb3499"}
// b. All the rest of the calls are from OPA-Server-B and the authorization is using another header :
// `Token tokenForExample`

// Examples for homepage data 1.
// a. The 3 first components are a carousel of cards.
// b. data component with user highlight as a card and another 4 carousels .
// c. Two other data components as carousels for best choices to user .
// 2.
// iii. A hero banner with 4 items
// iv. 5 different carousels .
// 3.
// v. A hero banner with 6 items
// vi. Data component the show picture of the day for the user
// vii. 1 Carousel

// 1. Horizontal Carousel of Cards :
// a. Each card can contain :
// i. Svg icon
// ii. Text
// iii. Image
// iv. Action to do ( navigation to another part in the app / open the image in
// different modal )
// b. No limit on number of objects in the carousel
// c. Hero Banner :
// i. Background image
// ii. Text
// iii. Button with action ( same as above )
// iv. No Limit on objects in the banner
// d. Data component :
// i. Functions as data components to present User specific data. For example ( user highlights , carousel with items related to user’s location , etc.. )
// ii. Can be one of the components above / Card / Image

// const Data = {
//   "type": "data",
//   "data": [
//     {
//       "type": "card",
//       "data": {
//         "icon": "https://www.flaticon.com/svg/vstatic/svg/2919/2919609.svg?token=exp=161422951",
//         "text": "text",
//         "image": "https://www.flaticon.com/svg/vstatic/svg/2919/2919609.svg?token=exp=161422951",
//         "action": "action"

//     },
//   ],
// };

// export const getHomepageData = ( shouldFail = false): Promise<mockRequestValue> => {
//   if (shouldFail) {
//     return mockFailure({error: 401, message: 'Invalid Request'});
//   }

//   return mockSuccess(Data);
