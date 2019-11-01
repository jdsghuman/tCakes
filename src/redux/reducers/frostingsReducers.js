const frostingsReducer = (state = [], action) => {
  switch(action.type) {
    case 'SET_FROSTINGS':
      return action.payload;
    default:
      return state;
  }
}

export default frostingsReducer;