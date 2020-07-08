import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import themeActions from './themeActions';

const toggleTheme = (state, action) => {
  return {
    ...state,
    themeConfig: state.themeConfig === 'ligth' ? 'dark' : 'ligth',
    isChecked: !state.isChecked,
  }
}

const theme = createReducer({ themeConfig: "light", isChecked: false }, {
  [themeActions.toggleTheme]: toggleTheme,
})

export default combineReducers({
  theme,
});
