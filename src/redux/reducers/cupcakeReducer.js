const cupcakeReducer = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_CUPCAKE_ORDER':
      return [...state, action.payload];
    case 'CLEAR_CUPCAKE_ORDER':
      return [];
    default:
      return state;
  }
}

export default cupcakeReducer;
