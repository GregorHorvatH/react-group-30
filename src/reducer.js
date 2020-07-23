export default function (state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];

    case 'DELETE_TODO':
      return state.filter((item) => item.id !== action.payload);

    case 'TOGGLE_TODO':
      return state.map((item) =>
        item.id === action.payload
          ? {
              ...item,
              completed: !item.completed,
            }
          : item,
      );

    default:
      return state;
  }
}
