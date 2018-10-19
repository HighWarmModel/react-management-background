import { URL, Api} from './index'
import CommonClass from '../utils/commonClass'

// 用户登录
function userLogin (data) {
  return Api.post(data)
}
// 获取用户信息
function getUserInfo (data) {
  return Api.post(URL.PATH_NAME.USER_LOGIN, data, {token: CommonClass.getCookie('token')})
}
export { userLogin, getUserInfo }