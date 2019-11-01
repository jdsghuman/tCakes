import { takeEvery, put as dispatch } from 'redux-saga/effects';
import axios from 'axios';

function* getToppings() {
  try {
    const response = yield axios.get('http://localhost:4000/cupcakes/toppings');
    yield dispatch({ type: 'SET_TOPPINGS', payload: response.data });
  } catch (error) {
      console.log(`Set toppings fetch failed ${error}`);
  }
}

function* toppingsSaga() {
  yield takeEvery('FETCH_TOPPINGS', getToppings);
}

export default toppingsSaga;