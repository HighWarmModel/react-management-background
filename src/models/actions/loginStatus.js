import { createAction } from 'redux-actions'
import { STATUS } from '../types'
const changeLoginStatusAction = (data, token) => {
  // do something
   return {
    token,
     data
   }
 }
 export const changeLoginStatusActionData = {
  changeLoginStatusAction: createAction(STATUS.LOGIN_STATUS,changeLoginStatusAction),
  changeLoginStatusActionAsync: createAction(STATUS.LOGIN_STATUS_START,changeLoginStatusAction) // 异步
 }