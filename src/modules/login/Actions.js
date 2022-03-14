import {ActionTypes} from './ActionTypes';

export const setVehiclePowerOn = (payload: boolean) => ({
  type: ActionTypes.setVehiclePowerOn,
  payload: payload,
});

