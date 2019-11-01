import { takeEvery, put as dispatch } from 'redux-saga/effects';
import axios from 'axios';

function* getOrders() {
  try {
    const response = yield axios.get('http://localhost:4000/cupcakes/orders');
    yield dispatch({ type: 'SET_ORDERS', payload: response.data });
  } catch (error) {
    console.log(`Order fetch failed ${error}`);
  }
}

function* myOrdersSaga() {
  yield takeEvery('FETCH_ORDERS', getOrders);
}

export default myOrdersSaga;