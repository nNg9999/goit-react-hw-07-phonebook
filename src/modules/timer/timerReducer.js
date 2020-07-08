import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import timerActions from './timerActions';


const valueReducer = createReducer(0, {
  [timerActions.increment]: (state, action) => state + action.payload,
  [timerActions.decrement]: (state, action) => state - action.payload < 0 ? state : state - action.payload,
});

const stepReducer = createReducer(5, {
  [timerActions.changeStep]: (state, action) => { return action.payload.step },
});


export default combineReducers({
  value: valueReducer,
  step: stepReducer,
});
