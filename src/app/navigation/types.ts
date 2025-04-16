import { SCREEN_NAMES } from '../constants';

export type RootStackParamList = {
  MainTabs: undefined;
  [SCREEN_NAMES.ABOUT]: undefined;
  [SCREEN_NAMES.SUPPORT]: undefined;
};

export type BottomTabParamList = {
  [SCREEN_NAMES.HOME]: undefined;
  [SCREEN_NAMES.SERVICES]: undefined;
  [SCREEN_NAMES.BLOG]: undefined;
  [SCREEN_NAMES.CONTACT]: undefined;
}; 