import {Dimensions, Platform} from 'react-native';
import DeviceInfo from 'react-native-device-info';

//gets device width
export const width = Dimensions.get('screen').width;
//gets device height
export const height = Dimensions.get('screen').height;
//gets a percentage of the width
export const percentageWidth = (percent: number) => (percent / 100) * width;
//gets a percentage of the height
export const percentageHeight = (percent: number) => (percent / 100) * height;
//determine if its big screen or not
export const largeScreen = height > 750;
//device ios
export const ios = Platform.OS === 'ios';
//device android
export const android = Platform.OS === 'android';

export const isBigDevice =
  DeviceInfo.isTablet() || DeviceInfo.getModel().includes('IPad');

export const RADIUS = {
  card: percentageWidth(8),
  bottomSheet: percentageWidth(8),
  home: percentageWidth(6),
};

export const CARD = {
  activeScale: 0.95,
  borderRadius: percentageWidth(8),
};

export const COLORS = {
  slate: '#757C88',
  white: '#ffffff',
  black: '#000000',
  red: '#ff0000',
  orange: '#ffa500',
  yellow: '#ffff00',
  green: '#008000',
  blue: '#0000ff',
  indigo: '#4b0082',
  violet: '#ee82ee',
  neonGreen: '#39ff14',
  cyanGreen: '#00ffff',
  lightCyanGreen: 'rgba(28, 169, 201,0.1)',
  successGreen: '#4cd964',
  springGreen: '#00ff7f',
  lightGray: '#cccccc',
  gray: '#8c8c8c',
  darkGray: '#0f0f0f',
  lightBlue: 'rgba(8,146,208,0.1)',
  battleshipGray: 'rgba(132,132,130,0.2)',
  goldenYellow: 'rgba(230, 196, 46, 1)',
  dullYellow: 'rgb(255,223,0)',
  overlay: 'rgba(0,0,0,0.1)',
  card: '#f9fafb',
};
