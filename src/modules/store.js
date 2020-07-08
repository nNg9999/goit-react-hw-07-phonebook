import { configureStore } from '@reduxjs/toolkit';
import rootModule from './rootModule';

// import logger from 'redux-logger';

// console.log(typeof function () { });

// import timerReducer from './timer/timerReducer';
// import contactsReducer from './contacts/contactsReducer'

// const loggerMiddleware = store => next => action => {
//   console.group(action.type);
//   console.info('dispatching', action);
//   console.groupEnd(action.type);

//   next(action);
// };

// const md1 = store => next => action => {
//   console.log('Hello from md1');
//   next(action); // если не вызвать можно остановить action
// };


// const md2 = store => next => action => {
//   console.log('Hello from md2');
//   next(action);
// };


// const reduxThunk = store => next => action => {
//   if (typeof action === 'function') {
//     action(store.dispatch, store.getState);
//     return;
//   }

//   next(action);
// }

// const defaultMiddleware = getDefaultMiddleware();

const store = configureStore({
  reducer: rootModule,
  // applyMiddleware(logger),
  // middleware: [...defaultMiddleware], // под капотом есть можно убрать
});

export default store;
