import { delay } from 'redux-saga'
import { call, put, takeEvery } from 'redux-saga/effects'
import { STATUS } from '../types'

 function* changeLoginStatusAsync (action) {
  yield call(delay, 2000)
  yield put({      // dispatch一个action到reducer， payload是请求返回的数据
    type: STATUS.LOGIN_STATUS_END,
    payload: action.payload   
  })
}

export function* watchChangeLoginStatusAsync () {
  yield takeEvery(STATUS.LOGIN_STATUS_START, changeLoginStatusAsync)
}