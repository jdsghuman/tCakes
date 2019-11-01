const toppingsReducer = (state = [], action) => {
  switch(action.type) {
    case 'SET_TOPPINGS':
      return action.payload;
    default:
      return state;
  }
}

export default toppingsReducer;