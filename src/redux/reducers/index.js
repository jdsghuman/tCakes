import { combineReducers } from 'redux';
import bases from './basesReducer';
import cupcakeToSendInOrder from './cupcakeReducer';
import frostings from './frostingsReducers';
import myOrders from './myOrdersReducer';
import shoppingCart from './shoppingCartReducer';
import toppings from './toppingsReducer';

const rootReducer = combineReducers({
  bases,
  cupcakeToSendInOrder,
  frostings,
  myOrders,
  shoppingCart,
  toppings,
});

export default rootReducer;
