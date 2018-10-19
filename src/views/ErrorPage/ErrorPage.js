import React from 'react'
import Exception from 'ant-design-pro/lib/Exception'
import 'ant-design-pro/lib/Exception/style/css'

export default class ErrorPage extends React.Component{
  render () {
    console.log(this.props)
    return (
      <div>
        <Exception type={this.props.location.pathname.split('/')[1]} />
      </div>
    )
  }
}