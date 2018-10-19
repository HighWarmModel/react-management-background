import React from 'react'
import { Layout, Menu } from 'antd'
import { connect } from 'react-redux'

import * as actions from '../../models/actions'
import './home.styl'
import IconTag from '../../components/IconTag'
import FirstRoute from '../../routes/firstRoute'
import routeArr from '../../utils/routeArr'
import routesConfig from '../../routes/routes.config'
import HeaderMenu from '../../components/headerMenu'
// import {$http} from '../../api'
// import commconClass from '../../utils/commonClass'
const { Content, Footer, Sider } = Layout
const SubMenu = Menu.SubMenu
class Dashboard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      collapsed: false
    }
  }
  componentDidMount () {
    if (this.props.loginStatus.token) {
      
    } else {
      this.props.history.push('/userlogin')
    }
    // $http.post('https://www.ffdzpay.com','/gateway/pay/queryTrades?sign=e16b99064bc0021f0a219d393dd20eb3:1538101334697',
    // {
    //   "beginDate":'20180303111111',
    //   "endDate":'20180903111111',
    //   "pageNum":"15",
    //   "pageSize":"1",
    //   "busi_id":"733010420153973"
    // }).then(res => {
    //   console.log(res)
    // }).catch(err => {
    //   console.log(err)
    // })
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }
  checkSelector = () => {
    let tag = routeArr(routesConfig).filter(v => v.path === this.props.location.pathname)
    return tag.length > 0 ? tag[0].tag : ''
  }
  render () {
    return (
      <Layout style={{ minHeight: '100vh' }} 
      className="home-layout">
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          className="home-sider"
          width={230}
          theme="dark"
          trigger={null}
          style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}
        >
          <div className="logo">
            <img src={require('./icon/logo.png')} alt="loading" title="杭州驿商科技有限公司" />
            <b>驿商商户管理平台</b>
          </div>
          <Menu className="home-menu" theme="dark" defaultSelectedKeys={[this.checkSelector()]} mode="inline">
            <Menu.Item onClick={() => this.props.history.push('/home')} className="home-menu-item" key="1-2">
              <IconTag type="home" />
              <span className="home-menu-title">首页</span>
            </Menu.Item>
            <Menu.Item onClick={() => this.props.history.push('/businessinformation')} className="home-menu-item" key="1-3">
              <IconTag type="merchant" />
              <span className="home-menu-title">商户信息</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={<div><IconTag type="statistics" /><span className="home-menu-title">统计报表</span></div>}
              className="home-submenu"
            >
              <Menu.Item className="home-submenu-item" onClick={() => this.props.history.push('/statisticalreports/revenuereport')} key="1-4-1">
                <IconTag type="revenue" />
                <span className="home-menu-title">营收报表</span>
              </Menu.Item>
              <Menu.Item className="home-submenu-item" onClick={() => this.props.history.push('/statisticalreports/itemreport')} key="1-4-2">
                <IconTag type="single" />
                <span className="home-menu-title">单品报表</span>
              </Menu.Item>
            </SubMenu>
            <Menu.Item className="home-menu-item" onClick={() => this.props.history.push('/commoditymanagement')} key="1-5">
              <IconTag type="commodity" />
              <span className="home-menu-title">商品管理</span>
            </Menu.Item>
            <Menu.Item className="home-menu-item" onClick={() => this.props.history.push('/equipmentmanagement')} key="1-6">
              <IconTag type="equipment" />
              <span className="home-menu-title">设备管理</span>
            </Menu.Item>
            <Menu.Item className="home-menu-item" onClick={() => this.props.history.push('/electronicinvoice')} key="1-7">
              <IconTag type="invoice" />
              <span className="home-menu-title">电子发票</span>
            </Menu.Item>
            <SubMenu
              key="sub2"
              title={<div><IconTag type="reconciliation" /><span className="home-menu-title">对账管理</span></div>}
              className="home-submenu"
            >
              <Menu.Item className="home-submenu-item" onClick={() => this.props.history.push('/accountcheck/FinancialDetails')} key="1-8-1">
              <IconTag type="financial-details" />
                <span className="home-menu-title">财务明细</span>
              </Menu.Item>
              <Menu.Item className="home-submenu-item" onClick={() => this.props.history.push('/accountcheck/financialstatistics')} key="1-8-2">
                <IconTag type="financial-statistics" />
                <span className="home-menu-title">财务统计</span>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ marginLeft: this.state.collapsed ? 80 : 230, transition: 'margin-left .2s' }}>
          {/* 头部导航 */}
          <HeaderMenu collapsed={this.state.collapsed} toggle={this.toggle}  />
          <Content>
            {/* <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb> */}
            <div style={{ margin: '46px 43px'}}>
              <FirstRoute />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            商户管理后台 ©2018 技术支持 杭州驿商科技有限公司
          </Footer>
        </Layout>
      </Layout>
    )
  }
}
export default connect(state => state, actions.changeLoginStatusActionData)(Dashboard)