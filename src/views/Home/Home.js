// 首页
import React from 'react'
// import { Row, Col } from 'antd'
import Exception from 'ant-design-pro/lib/Exception'
import 'ant-design-pro/lib/Exception/style/css'

import './index.styl'
class Home extends React.Component{
  render () {
    return (
      <dl className="home-statistics">
        <dd className="home-statistics-first">
        <Exception className="error-common" type="500" title={<div></div>} desc={<h2>网站还在建设中……</h2> } backText={<div></div>} />
        {/* <Row className="home-statistics-first-main">
          <Col className="home-statistics-first-container" xs={24} sm={12} md={12} lg={12} xl={6}>Col</Col>
          <Col className="home-statistics-first-container" xs={24} sm={12} md={12} lg={12} xl={6}>Col</Col>
          <Col className="home-statistics-first-container" xs={24} sm={12} md={12} lg={12} xl={6}>Col</Col>
          <Col className="home-statistics-first-container" xs={24} sm={12} md={12} lg={12} xl={6}>Col</Col>
        </Row> */}
        </dd>
      </dl>
    )
  }
}
export default Home