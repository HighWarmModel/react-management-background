// 电子发票
import React from 'react'
import Exception from 'ant-design-pro/lib/Exception'
import 'ant-design-pro/lib/Exception/style/css'
export default class ElectronicInvoice extends React.Component{
  render () {
    return (<div>
      <Exception className="error-common" type="500" title={<div></div>} desc={<h2>网站还在建设中……</h2> } backText={<div></div>} />
    </div>)
  }
}