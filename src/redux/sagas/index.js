import { all } from 'redux-saga/effects';
import basesSaga from './basesSaga';
import frostingsSaga from './frostingsSaga';
import myOrdersSaga from './myOrdersSaga';
import placeOrderSaga from './placeOrderSaga';
import toppingsSaga from './toppingsSaga';

export default function* rootSaga() {
  yield all([
    basesSaga(),
    frostingsSaga(),
    myOrdersSaga(),
    placeOrderSaga(),
    toppingsSaga()
  ]);
}