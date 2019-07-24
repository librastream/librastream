import { all, call, put, takeEvery } from 'redux-saga/effects';
import { LOAD_TRANSACTIONS_LIST, RENDER_TRANSACTIONS_LIST } from '../actions';

export function* fetchTransactionsList() {
  const endpoint = 'https://gist.githubusercontent.com/brunokrebs/f1cacbacd53be83940e1e85860b6c65b/raw/to-do-items.json';
  const response = yield call(fetch, endpoint);
  const data = yield response.json();
  yield put({ type: RENDER_TRANSACTIONS_LIST, transactionsList: data });
}

export function* loadTransactionsList() {
  yield takeEvery(LOAD_TRANSACTIONS_LIST, fetchTransactionsList);
}

export default function* rootSaga() {
  yield all([loadTransactionsList()]);
}
