import Loadable from 'react-loadable'

import Loading from '../components/loading'
// import delayRequest from '../utils/delayRequest'
export default [
  {
    id: '2',
    tag: '2',
    exact: true,
    permissions: true,
    path: '/userlogin', // 登录
    component: Loadable({
      loader: () => import('../views/UserLogin/UserLogin'),
      loading: Loading,
      delay: 0  // 多久之后出现loading
    }),
  },
  // app
  {
    id: '1',
    tag: '1-2', // 用来标记选中状态
    permissions: true, // 权限
    path: '/',
    exact: false,
    component: Loadable({
      loader: () =>  import('../views/Dashboard/Dashboard'),
      loading: Loading,
    }),
    routes: [
      {
        id: '1-1',
        tag: '1-2',
        permissions: true,
        path: '/', //
        component: Loadable({
          loader: () => import('../views/Home/Home'),
          loading: Loading,
        })
        // redirect: true,
        // from: '/',
        // to: '/home'
      },
      {
        id: '1-2',
        tag: '1-2',
        permissions: true,
        path: '/home', // 首页
        component: Loadable({
          // loader: () => delayRequest(400000).then(() =>   import('../views/Home/Home')),
          loader: () => import('../views/Home/Home'),
          loading: Loading,
        })
      },
      {
        id: '1-3',
        tag: '1-3',
        permissions: true,
        name: 'businessinformation',
        title: '商户信息',
        path: '/businessinformation', //商户信息
        component: Loadable({
          loader: () => import('../views/BusinessInformation/BusinessInformation'),
          loading: Loading,
        }),
      },
      {
        id: '1-4',
        tag: '1-4',
        permissions: true,
        name: 'statisticalreports',
        title: '统计报表',
        path: '/statisticalreports', // 统计报表
        redirect: true,
        from: '/statisticalreports',
        to: '/statisticalreports/revenuereport',
        routes: [
          {
            id: '1-4-1',
            tag: '1-4-1',
            permissions: true,
            name: 'revenuereport',
            title: '营收报表',
            path: '/statisticalreports/revenuereport', // 营收报表
            component: Loadable({
              loader: () => import('../views/RevenueReport/RevenueReport'),
              loading: Loading,
            }),
          },
          {
            id: '1-4-2',
            tag: '1-4-2',
            permissions: true,
            name: 'itemreport',
            title: '单品报表',
            path: '/statisticalreports/itemreport', // 单品报表
            component: Loadable({
              loader: () => import('../views/ItemReport/ItemReport'),
              loading: Loading,
            }),
          }
        ]
      },
      {
        id: '1-5',
        tag: '1-5',
        permissions: true,
        name: 'commoditymanagement',
        title: '商品管理',
        path: '/commoditymanagement', //商品管理
        component: Loadable({
          loader: () => import('../views/CommodityManagement/CommodityManagement'),
          loading: Loading,
        }),
      },
      {
        id: '1-6',
        tag: '1-6',
        permissions: true,
        name: 'equipmentmanagement',
        title: '设备管理',
        path: '/equipmentmanagement', //设备管理
        component: Loadable({
          loader: () => import('../views/EquipmentManagement/EquipmentManagement'),
          loading: Loading,
        }),
      },
      {
        id: '1-7',
        tag: '1-7',
        permissions: true,
        name: 'electronicinvoice',
        title: '电子发票',
        path: '/electronicinvoice', //电子发票
        component: Loadable({
          loader: () => import('../views/ElectronicInvoice/ElectronicInvoice'),
          loading: Loading,
        }),
      },
      {
        id: '1-8',
        tag: '1-8',
        permissions: true,
        name: 'accountcheck',
        title: '对账管理',
        path: '/accountcheck', // 对账管理
        redirect: true,
        from: '/accountcheck',
        to: '/accountcheck/FinancialDetails',
        routes: [
          {
            id: '1-8-1',
            tag: '1-8-1',
            permissions: true,
            name: 'FinancialDetails',
            title: '财务明细',
            path: '/accountcheck/FinancialDetails', // 财务明细
            component: Loadable({
              loader: () => import('../views/FinancialDetails/FinancialDetails'),
              loading: Loading,
            }),
          },
          {
            id: '1-8-2',
            tag: '1-8-2',
            permissions: true,
            name: 'financialstatistics',
            title: '财务统计',
            path: '/accountcheck/financialstatistics', // 财务统计
            component: Loadable({
              loader: () => import('../views/FinancialStatistics/FinancialStatistics'),
              loading: Loading,
            }),
          }
        ]
      },
      {
        id: '1-9',
        tag: '1-9',
        permissions: true,
        redirect: true,
        from: '*',
        to: '/404',
        routes: [
          {
            id: '1-9-1',
            tag: '1-9-1',
            permissions: true,
            path: '/404', // 404报错
            component: Loadable({
              loader: () => import('../views/ErrorPage/ErrorPage'),
              loading: Loading,
            }),
          }
        ]
      }
    ]
  }
];
