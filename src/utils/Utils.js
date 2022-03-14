import {CommonActions} from '@react-navigation/native';
import {Dimensions, Platform, NativeModules, Linking} from 'react-native';


export const clipText = (text, limit) => {
  if (text && text.length >= limit) {
    text = text.substring(0, limit - 2).concat('...');
  }
  return text;
};



export const resetNavigationStack = (navigation, screen) => {
  navigation.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{name: screen}],
    }),
  );
};

export const booleanToInt = (key: Boolean) => {
  return key ? 1 : 0;
};



export const check = (pixel: Number) => {
  const windowWidth = Dimensions.get('window').width;
  return (windowWidth * pixel) / 360;
};





