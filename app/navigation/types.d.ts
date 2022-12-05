import {StackNavigationProp} from '@react-navigation/stack';
import {MainRoutes, MainStackParamList} from './routes';

export type AppNavigationProp<
  RouteName extends keyof MainStackParamList = MainRoutes,
> = StackNavigationProp<MainStackParamList, RouteName>;
