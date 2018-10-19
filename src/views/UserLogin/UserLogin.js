import React from 'react'
import classNames from 'classnames'
import { message, Spin } from 'antd'
import { connect } from 'react-redux'

import './index.styl'
import * as actions from '../../models/actions'
import IconTag from '../../components/IconTag'
import { api_userLogin } from '../../api/api_user'
import CommonClass from '../../utils/commonClass'
import '../../style/test.styl'
class UserLogin extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
      border_active1: false,
      border_active2: false,
      err_value: '',
      account: '',
      psw: '',
      loading: false
    }
  }
  handleInputActive = (type) => {
    let active = this.state[type]
    this.setState({
      [type]: !active
    })
  }
  handleInputChange = (e, type) => {
    this.setState({
      [type]: e.target.value
    })
  }
  handleLoginClick = () => {
    let {account, psw} = this.state
    if (account.length === 0) {
      this.setState({
        err_value: '账号不能为空！'
      })
      return
    } 
    if (psw.length === 0) {
      this.setState({
        err_value: '密码不能为空！'
      })
      return
    }
    this.setState({loading: true})
    api_userLogin({
      action_type: 'LoginValidate',
      Passport: account,
      PassWord: psw
    }).then(res => {
      this.setState({loading: false})
      if (res.messagecode === 200) {
        let resultObject = res.ResultObject[0]
        if (resultObject.ResultCode - 0 === 100 ) {
          CommonClass.setCookie('token', resultObject.FifthParameter)
           this.props.changeLoginStatusAction('', resultObject.FifthParameter)
          message.success(resultObject.ResultDesc, 1.5, () => {
              this.props.history.push('/home')
            })
        } else {
          this.setState({
            err_value: resultObject.ResultDesc
          })
        }
      } else {
        this.setState({
          err_value: res.message
        })
      }
    })
  }
  render () {
    return (
      <div className="user-login">
        <div className="user-login-main">
          <div className="user-login-title">
            <img className="user-login-title-logo" src={require('../../assets/img/logo-icon.png')} alt="loading" />
            <p className="user-login-title-name">
              <span>驿商科技</span>
              <span>ESHANGTECH</span>
            </p>
            <h6 className="user-login-title-content">商户后台</h6>
          </div>
          <Spin className="user-login-spin" size="large" spinning={this.state.loading}>
            <div className="user-login-container test">
              <h6 className="name">用户登录</h6>
              <div className="user-login-input">
                <div className={classNames('user-login-input-container', 'user-login-account',this.state.border_active1 ? 'border-acitve' : null)} >
                  <IconTag type="account-icon" />
                  <input className="user-login-input-content" onChange={ (e) => this.handleInputChange(e, 'account')} onBlur={() => this.handleInputActive('border_active1')} onFocus={() => this.handleInputActive('border_active1')} placeholder="请输入账号" />
                </div>
                <div className={classNames('user-login-input-container',this.state.border_active2 ? 'border-acitve' : null)}>
                  <IconTag type="password-icon" />
                  <input type="password" className="user-login-input-content" onChange={ (e) => this.handleInputChange(e, 'psw')} onBlur={() => this.handleInputActive('border_active2')}   onFocus={() => this.handleInputActive('border_active2')} placeholder="请输入密码" />
                </div>
              </div>
              <p className="err">{this.state.err_value}</p>
              <div className="login-btn" onClick={this.handleLoginClick}>登录</div>
            </div>
          </Spin>
        </div>
      </div>
    )
  }
}
export default connect(state => state, actions.changeLoginStatusActionData)(UserLogin)