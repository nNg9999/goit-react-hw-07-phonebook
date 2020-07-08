import { createAction } from '@reduxjs/toolkit';

const increment = createAction('timer/increment');
const decrement = createAction('timer/decrement');
const changeStep = createAction('timer/changeStep');


export default { increment, decrement, changeStep };
