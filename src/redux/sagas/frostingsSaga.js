import { takeEvery, put as dispatch } from 'redux-saga/effects';
import axios from 'axios';

function* getFrostings() {
  try {
    const response = yield axios.get('http://localhost:4000/cupcakes/frostings');
    yield dispatch({ type: 'SET_FROSTINGS', payload: response.data });
  } catch (error) {
      console.log(`Set frostings fetch failed ${error}`);
  }
}

function* frostingsSaga() {
  yield takeEvery('FETCH_FROSTINGS', getFrostings);
}

export default frostingsSaga;