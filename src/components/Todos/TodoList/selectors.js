import { createSelector } from 'reselect';

// export const getDoneItems = (state) =>
//   state.todos.items.filter((item) => item.isDone);

// export const getNotDoneItems = (state) =>
//   state.todos.items.filter((item) => !item.isDone);

const getItems = (state) => state.todos.items;
// const getCount = (state) => state.todos.items.length;

export const getDoneItems = createSelector([getItems], (items) =>
  items.filter((item) => item.isDone),
);

export const getNotDoneItems = createSelector([getItems], (items) =>
  items.filter((item) => !item.isDone),
);
