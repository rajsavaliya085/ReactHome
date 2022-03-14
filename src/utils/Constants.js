import { Strings } from '../values/Strings';


export const AppType = {
  ANDROID: 'ANDROID',
  IOS: 'IOS',
  WEB: 'WEB',
};


export const BLEStatus = {
  DISCONNECTED: 0,
  CONNECTING: 1,
  CONNECTED: 2,
  SCAN: 3,
  NOTFOUND: 4,
  0: Strings.disconnected,
  1: Strings.connecting,
  2: Strings.connected,
  3: Strings.searchingDevice,
  4: Strings.bleNotFound,
};




export const Screens = {
  SPLASH: 'splash',
  INTRO_SLIDER: 'introSlider',
  DASHBOARD: 'dashboard',
  LOGIN: 'login',
};
