import { handleActions } from 'redux-actions'
import CommonClass from '../../utils/commonClass'
import { STATUS } from '../types'
const initialState = {
  data: '',
  token: CommonClass.getCookie('token')
}
const actions = {}
const loginStatusReducer = (state, action) => ({
  data: action.payload.data,
  token: action.payload.token
})
// 异步请求数据的时候开始
actions[STATUS.LOGIN_STATUS] = loginStatusReducer
export default handleActions(actions, initialState)
