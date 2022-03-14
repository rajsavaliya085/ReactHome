import React from 'react';
import Login from '../modules/login/components/login';
import Splash from '../modules/login/components/splash';
import Dashboard from '../modules/dashboard/components/dashboard';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Screens} from './Constants';


const Stack = createNativeStackNavigator();


const AppRouter = props => {
  return AppStack(props);
};

const AppStack = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({navigation}) => {
          return {
            detachPreviousScreen: !navigation.isFocused(),
            headerShown: false,
          };
        }}>
        <Stack.Screen name={Screens.SPLASH} component={Splash} />
          <Stack.Screen name={Screens.LOGIN} component={Login} />
          <Stack.Screen name={Screens.DASHBOARD} component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default AppRouter;
