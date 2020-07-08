import React from 'react';
import { connect } from 'react-redux';
// import timerActions from '../../redux/timer/timerActions';
import timerActions from '../../modules/timer/timerActions';
// import * as timerActions from './redux/timerActions';

import css from './Timer.module.css';


const Timer = ({ value, step, onIncrement, onDecrement, isChecked }) => {
  const button = `${css.button} ${
    isChecked ? css.button_dark : css.button_light
    }`


  return (
    <div className={css.container}>
      <button
        type="button"
        className={button}
        onClick={() => onDecrement(step)}
      >
        &#8722;
    </button>

      <div className={css.value}>{value} minutes</div>

      <button
        type="button"
        className={button}
        onClick={() => onIncrement(step)}
      >
        &#43;
    </button>
    </div>
  )
};


const mapStateToProps = state => {
  return {
    value: state.timer.value,
    step: state.timer.step,
    isChecked: state.theme.theme.isChecked,
  };
};

// const mapDispatchToprops = dispatch => {
//   return {
//     onIncrement: value => dispatch(timerActions.increment(value)),
//     onDecrement: value => dispatch(timerActions.decrement(value)),
//   };
// };

// как обьект с картой

const mapDispatchToprops = {
  onIncrement: timerActions.increment,
  onDecrement: timerActions.decrement,
};

export default connect(mapStateToProps, mapDispatchToprops)(Timer);
