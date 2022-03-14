import {combineReducers} from 'redux';
import {dashboardReducer} from '../modules/dashboard/Reducer';
import {ActionTypes} from '../modules/login/ActionTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const AppReducers = combineReducers({
  dashboardReducer: persistReducer(persistConfig, dashboardReducer),
});

const RootReducer = (state, action) => {
  console.log('action of Redux in Root Reducer', action.type);
  if (action.type === ActionTypes.setLogout) {
    console.log('state of Redux in Root Reducer', state);
    return AppReducers(undefined, action);
  } else {
    return AppReducers(state, action);
  }
};

export default AppReducers;
