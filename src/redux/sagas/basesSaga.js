import { takeEvery, put as dispatch } from 'redux-saga/effects';
import axios from 'axios';

function* getBases() {
  try {
    const response = yield axios.get('http://localhost:4000/cupcakes/bases');
    yield dispatch({ type: 'SET_BASES', payload: response.data });
  } catch (error) {
      console.log(`Set bases fetch failed ${error}`);
  }
}

function* basesSaga() {
  yield takeEvery('FETCH_BASES', getBases);
}

export default basesSaga;