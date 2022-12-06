import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

export enum MainRoutes {
  Splash = 'Splash', // display a logo or splash image
  AppCheck = 'AppCheck',
  SignIn = 'SignIn', // existing user entry point
  SignUp = 'SignUp',
  AppLoading = 'AppLoading', // Load User Data for signed in users
  Home = 'Home', // The first "real" page of the app, now a set of tabs
  ItemView = 'Settings', // Default Settings Page
}

export enum HomeRoutes {
  HomeA = 'Home',
  Profile = 'Profile',
}

export type MainStackParamList = {
  // Init Stack
  [MainRoutes.Splash]: undefined;
  [MainRoutes.AppCheck]: undefined;

  // Auth Stack
  [MainRoutes.SignIn]: undefined;
  [MainRoutes.SignUp]: undefined;

  // App Stack
  [MainRoutes.AppLoading]: undefined;
  [MainRoutes.Home]: undefined;
  [MainRoutes.ItemView]: undefined;
};

export type HomeTabsParamList = {
  [HomeRoutes.HomeA]: {update: boolean} | undefined; // just an example, "update" will later be used for version checks
  [HomeRoutes.Profile]: undefined;
};

export const MainStack = createNativeStackNavigator<MainStackParamList>();

export const HomeTabs = createBottomTabNavigator<HomeTabsParamList>();
