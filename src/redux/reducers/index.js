import { combineReducers } from 'redux';
import { panelsReducer } from './panelsReducer';

export const rootReducer = combineReducers({
  panels: panelsReducer,
})
