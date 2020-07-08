import timerReducer from './timer/timerReducer';
import contactsReducer from './contacts/contactsReducer';
import themeReducer from './theme/themeReducer';
import counterReducer from './counter/counterReducer';

const rootModule = {
  timer: timerReducer,
  contacts: contactsReducer,
  theme: themeReducer,
  counter: counterReducer,
};

export default rootModule;