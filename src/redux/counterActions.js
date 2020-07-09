// import types from './counterTypes';

// export const increment = (step) => ({
//   type: types.INCREMENT,
//   payload: { step },
// });

// export const decrement = (step) => ({
//   type: types.DECREMENT,
//   payload: { step },
// });

// export const setStep = (step) => ({
//   type: types.SET_STEP,
//   payload: { step },
// });

import { createAction } from '@reduxjs/toolkit';

export const increment = createAction('INCREMENT');
export const decrement = createAction('DECREMENT');
export const setStep = createAction('SET_STEP');
export const addCounter = createAction('ADD_COUNTER');
