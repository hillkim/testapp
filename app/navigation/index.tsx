import React, {useRef} from 'react';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';

import {useReduxDevToolsExtension} from '@react-navigation/devtools';
import {HomeRoutes, HomeTabs, MainRoutes, MainStack} from './routes';
import {useReduxSelector, selectIsRunning} from '../redux';

import {
  CheckScreen,
  LoadingScreen,
  HomeScreen,
  ProfileScreem,
  ViewScreen,
  SignInScreen,
  SignUpScreen,
  SplashScreen,
} from '../screens';

const Home = () => {
  console.log('Home');
  return (
    <HomeTabs.Navigator screenOptions={{headerShown: false}}>
      <HomeTabs.Screen name={HomeRoutes.HomeA} component={HomeScreen} />
      <HomeTabs.Screen name={HomeRoutes.Profile} component={ProfileScreem} />
    </HomeTabs.Navigator>
  );
};

const AppNavigation = (): React.ReactElement => {
  const isAppRunning = useReduxSelector(selectIsRunning);
  //  @ts-ignore
  const navigationRef: React.RefObject<NavigationContainerRef> = useRef(null);

  useReduxDevToolsExtension(navigationRef);

  console.log('isAppRunning', isAppRunning);

  return (
    <NavigationContainer ref={navigationRef}>
      <MainStack.Navigator screenOptions={{headerShown: false}}>
        {isAppRunning ? (
          <>
            <MainStack.Screen name={MainRoutes.Home} component={Home} />
            <MainStack.Screen
              name={MainRoutes.ItemView}
              component={ViewScreen}
            />
          </>
        ) : (
          <>
            <MainStack.Screen
              name={MainRoutes.Splash}
              component={SplashScreen}
            />
            <MainStack.Screen
              name={MainRoutes.AppCheck}
              component={CheckScreen}
            />
            <MainStack.Screen
              name={MainRoutes.SignIn}
              component={SignInScreen}
            />
            <MainStack.Screen
              name={MainRoutes.SignUp}
              component={SignUpScreen}
            />
            <MainStack.Screen
              name={MainRoutes.AppLoading}
              component={LoadingScreen}
            />
          </>
        )}
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export * from './types';
export * from './routes';
export default AppNavigation;
