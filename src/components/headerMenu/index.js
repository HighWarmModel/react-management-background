import React from 'react'
import { Layout, Icon, Dropdown, Menu, message, Avatar, Tag, Breadcrumb } from 'antd'
import moment from 'moment'
import groupBy from 'lodash/groupBy'
import { withRouter, Link } from 'react-router-dom' //可以是非页面级组件操作路由
import NoticeIcon from 'ant-design-pro/lib/NoticeIcon'
import 'ant-design-pro/lib/NoticeIcon/style/css'
import { connect } from 'react-redux'

import * as actions from '../../models/actions'
import CommonClass from '../../utils/commonClass'
import IconTag from '../IconTag'
import routeArr from '../../utils/routeArr'
import routesConfig from '../../routes/routes.config'
import './index.styl'
const { Header } = Layout
const data = [{
  id: '000000001',
  avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
  title: '你收到了 14 份新周报',
  datetime: '2017-08-09',
  type: '通知',
}, {
  id: '000000002',
  avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
  title: '你推荐的 曲妮妮 已通过第三轮面试',
  datetime: '2017-08-08',
  type: '通知',
}, {
  id: '000000003',
  avatar: 'https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png',
  title: '这种模板可以区分多种通知类型',
  datetime: '2017-08-07',
  read: true,
  type: '通知',
}, {
  id: '000000004',
  avatar: 'https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png',
  title: '左侧图标用于区分不同的类型',
  datetime: '2017-08-07',
  type: '通知',
}, {
  id: '000000005',
  avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
  title: '内容不要超过两行字，超出时自动截断',
  datetime: '2017-08-07',
  type: '通知',
}, {
  id: '000000006',
  avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
  title: '曲丽丽 评论了你',
  description: '描述信息描述信息描述信息',
  datetime: '2017-08-07',
  type: '消息1',
}, {
  id: '000000007',
  avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
  title: '朱偏右 回复了你',
  description: '这种模板用于提醒谁与你发生了互动，左侧放『谁』的头像',
  datetime: '2017-08-07',
  type: '消息1',
}, {
  id: '000000008',
  avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
  title: '标题',
  description: '这种模板用于提醒谁与你发生了互动，左侧放『谁』的头像',
  datetime: '2017-08-07',
  type: '消息1',
}, {
  id: '000000009',
  title: '任务名称',
  description: '任务需要在 2017-01-12 20:00 前启动',
  extra: '未开始',
  status: 'todo',
  type: '待办',
}, {
  id: '000000010',
  title: '第三方紧急代码变更',
  description: '冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务',
  extra: '马上到期',
  status: 'urgent',
  type: '待办',
}, {
  id: '000000011',
  title: '信息安全考试',
  description: '指派竹尔于 2017-01-09 前完成更新并发布',
  extra: '已耗时 8 天',
  status: 'doing',
  type: '待办',
}, {
  id: '000000012',
  title: 'ABCD 版本发布',
  description: '冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务',
  extra: '进行中',
  status: 'processing',
  type: '待办',
}];

function onItemClick(item, tabProps) {
  console.log(item, tabProps);
}

function onClear(tabTitle) {
  console.log(tabTitle);
}

function getNoticeData(notices) {
  if (notices.length === 0) {
    return {};
  }
  const newNotices = notices.map((notice) => {
    const newNotice = { ...notice };
    if (newNotice.datetime) {
      newNotice.datetime = moment(notice.datetime).fromNow();
    }
    // transform id to item key
    if (newNotice.id) {
      newNotice.key = newNotice.id;
    }
    if (newNotice.extra && newNotice.status) {
      const color = ({
        todo: '',
        processing: 'blue',
        urgent: 'red',
        doing: 'gold',
      })[newNotice.status];
      newNotice.extra = <Tag color={color} style={{ marginRight: 0 }}>{newNotice.extra}</Tag>;
    }
    return newNotice;
  });
  return groupBy(newNotices, 'type');
}

const noticeData = getNoticeData(data)


const breadcrumbFunc = (pathname) => {
  let newRouteArr = []
    pathname.split('/').forEach(v => {
    let routeArrFilter = routeArr(routesConfig).filter(k => k.name === v)
     if (routeArrFilter.length > 0) {
      newRouteArr.push({title: routeArrFilter[0].title, name: routeArrFilter[0].name, link: routeArrFilter[0].link})
     }
  })
  return newRouteArr
}
class HeaderMenu extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
      newRouteArr: []
    }
  }
  componentDidMount () {
    let newRouteArr = breadcrumbFunc(this.props.location.pathname)
    this.setState({
      newRouteArr
    })
    this.props.history.listen((route, action) => {
      if (action === 'push') {
        newRouteArr = breadcrumbFunc(route.pathname)
        this.setState({
          newRouteArr
        })
      }
    })
  }
  handleMenuClick = (e) => {
    if (e.key === '0') {
      message.success('退出成功！', 1.5, () => {
        this.props.changeLoginStatusAction('', null)
        CommonClass.delCookie('token')
        this.props.history.push('/userlogin')
        // do something 清楚cookie 跳转到登录页
      })
    }
  }
  render () {
    
    return(
      <header className="header-menu">
        <div  className="header-menu-main">
          <Header className="header-menu-container">
            <div className="header-menu-top">
              <Icon
                className="left-trigger"
                type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.props.toggle}
              />
              <div className="right-container">
                <NoticeIcon
                  className="notice-icon"
                  // count={5}
                  bell={<IconTag type="notice-icon" />}
                  onItemClick={onItemClick}
                  onClear={onClear}
                  popupAlign={{ offset: [20, 0] }}
                >
                  <NoticeIcon.Tab
                    list={noticeData['消息']}
                    title="消息"
                    emptyText="还没有消息"
                    emptyImage="https://gw.alipayobjects.com/zos/rmsportal/wAhyIChODzsoKIOBHcBk.svg"
                  />
                </NoticeIcon>
                  <Dropdown className="head-img" placement="bottomCenter" overlay={<Menu onClick={this.handleMenuClick}>
                    <Menu.Item key="0"><Icon type="logout" theme="outlined" />退出登录</Menu.Item>
                  </Menu>}>
                    <div className="head-img-container">
                        <Avatar src={require('../../assets/img/headimg-default.png')} />
                    </div>
                  </Dropdown>
              </div>
            </div>
        </Header>
        {this.state.newRouteArr.length > 0 ? 
              <div className="header-menu-bottom" >
                <IconTag type="location-icon" />
                <Breadcrumb separator=">>">
                {this.state.newRouteArr.map((v, i) => {
                  return <Breadcrumb.Item className="header-menu-bottom-item" key={v.name}>{v.link ? <Link to={v.link}>{v.title}</Link> : v.title}</Breadcrumb.Item>
                })}
                </Breadcrumb>
              </div> : ''}
      </div>
    </header>
    )
  }
}
export default connect(state => state, actions.changeLoginStatusActionData)(withRouter(HeaderMenu))