const shoppingCartReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.payload];
    case 'CLEAR_CART':
      return [];
    default:
      return state;
  }
}

export default shoppingCartReducer;