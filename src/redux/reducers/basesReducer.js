const basesReducer = (state = [], action) => {
  switch(action.type) {
    case 'SET_BASES':
      return action.payload;
    default:
      return state;
  }
}

export default basesReducer;