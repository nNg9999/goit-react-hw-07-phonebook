
import { combineReducers } from 'redux';
import timerReducer from './timer/timerReducer';
import contactsReducer from './contacts/contactsReducer'

const rootReducer = combineReducers({
  timer: timerReducer,
  contacts: contactsReducer,
});

export default rootReducer;
