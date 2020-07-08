import { createAction } from '@reduxjs/toolkit';

const toggleTheme = createAction('theme/toggleTheme', (theme, isChecked) => ({
  payload:
  {
    isChecked: false,
    themeConfig: 'light',
  }

}));

export default {
  toggleTheme,
};
