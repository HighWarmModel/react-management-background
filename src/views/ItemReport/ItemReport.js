// 单品报表
import React from 'react'

import Exception from 'ant-design-pro/lib/Exception'
import 'ant-design-pro/lib/Exception/style/css'
export default class ItemReport extends React.Component{
  render () {
    return (<div>
      <Exception className="error-common" type="500" title={<div></div>} desc={<h2>网站还在建设中……</h2> } backText={<div></div>} />
    </div>)
  }
}