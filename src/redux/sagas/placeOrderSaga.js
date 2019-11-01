import { takeEvery, call } from 'redux-saga/effects';
import axios from 'axios';
import Swal from 'sweetalert2'

function* placeOrder(action) {
  try {
    const response = yield call(axios.post, 'http://localhost:4000/cupcakes/orders', action.payload);
    if (response) {
      Swal.fire({
        type: 'success',
        title: 'Order completed!',
      });
    }
  } catch (error) {
    console.log(`Cupcake order failed ${error}`);
    Swal.fire({
      type: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
    })
  }
}

function* placeOrderSaga() {
  yield takeEvery('PLACE_ORDER', placeOrder);
}

export default placeOrderSaga;
