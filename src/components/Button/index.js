import React from 'react';
import { connect } from 'react-redux';

import themeActions from "../../modules/theme/themeActions";

import css from './Button.module.css'


const Button = ({ label, isChecked, onToggle, isOpen }) => {
  const button = `${css.button} ${
    isChecked ? css.button_dark : css.button_light
    }`

  //theme === 'light' ? 'btn-light' : 'btn-dark'
  return (
    <button
      className={button}
      // type="button"
      onClick={onToggle}
    >
      {isOpen ? `Hide${label}` : `Show${label}`}
    </button>

    // <button type="button" onClick={onToggle}>
    //   {isOpen ? 'HideTimer' : 'ShowTimer'}
    // </button>

  );
}

const mapStateToProps = (state) => ({
  isChecked: themeActions.toggleTheme,
})

export default connect(mapStateToProps)(Button);
