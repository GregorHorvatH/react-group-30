import { createReducer } from '@reduxjs/toolkit';
import * as actions from './counterActions';

const initialState = {
  items: [
    {
      id: 1,
      value: 0,
      step: 1,
    },
    {
      id: 2,
      value: 0,
      step: 1,
    },
  ],
  errorMessage: '',
};

const increment = (state, { payload: { id, step } }) => ({
  ...state,
  items: state.items.map((item) =>
    item.id !== id
      ? item
      : {
          ...item,
          value: item.value + step,
        },
  ),
});
const decrement = (state, { payload: { id, step } }) => ({
  ...state,
  items: state.items.map((item) =>
    item.id !== id
      ? item
      : {
          ...item,
          value: item.value - step,
        },
  ),
});
const setStep = (state, { payload: { id, step } }) => ({
  ...state,
  items: state.items.map((item) =>
    item.id !== id
      ? item
      : {
          ...item,
          step,
        },
  ),
});

const addCounter = (state, { payload: item }) => {
  const hasItem = state.items.find(({ id }) => id === item.id);

  return {
    ...state,
    items: hasItem ? state.items : [...state.items, item],
    errorMessage: hasItem ? 'Item is exists' : '',
  };
};

export default createReducer(initialState, {
  [actions.increment.type]: increment,
  [actions.decrement.type]: decrement,
  [actions.setStep.type]: setStep,
  [actions.addCounter.type]: addCounter,
});
