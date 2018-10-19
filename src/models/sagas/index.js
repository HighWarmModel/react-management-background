import { all } from 'redux-saga/effects'
import { watchChangeLoginStatusAsync } from './loginStatus'
export default function* rootSaga () {
  yield all([
    watchChangeLoginStatusAsync()
  ])
}