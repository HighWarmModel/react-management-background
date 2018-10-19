import React from 'react'
import ReactDOM from 'react-dom'
import { LocaleProvider } from 'antd';
import { Provider } from 'react-redux'
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';

import './style/common.styl'
import './style/initial.styl'
import MainRouter from './routes'
import configureStore from './models'
const store = configureStore()
ReactDOM.render(
  <Provider store={store}>
    <LocaleProvider locale={zh_CN}><MainRouter /></LocaleProvider>
  </Provider>
, document.getElementById('root'));
