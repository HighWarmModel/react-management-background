const ACCOUNTCHECK_SCREEN = {
  SELLDATA_TYPE: [{
      type: 0,
      value: '被扫接口传'
    },
    {
      type: 1,
      value: '支付宝'
    },
    {
      type: 2,
      value: '微信'
    },
    {
      type: 3,
      value: '花呗分期'
    }
  ],
  PAYMENT_CHANNEL: [{
      type: 1001,
      value: '富友',
    },
    {
      type: 1002,
      value: '众码付',
    },
    {
      type: 1003,
      value: '威付通',
    },
    {
      type: 1004,
      value: '付付',
    },
    {
      type: 1005,
      value: '客无忧',
    }
  ],
  TRADING_STATUS: [{
      type: 0,
      value: '失败',
    },
    {
      type: 1,
      value: '成功',
    },
    {
      type: 9,
      value: '已退款',
    }
  ]
}
const SHOW_ACCOUNTCHECK_SCREEN = [{
    type: 1,
    tab: '服务区',
    placeholder: '选择服务区',
    children: []
  },
  {
    type: 2,
    tab: '门店',
    placeholder: '选择服务区',
    children: []
  },
  {
    type: 3,
    tab: '支付方式',
    placeholder: '选择支付方式',
    children: ACCOUNTCHECK_SCREEN.SELLDATA_TYPE
  },
  {
    type: 4,
    tab: '移动支付通道',
    placeholder: '选择移动支付通道',
    children: ACCOUNTCHECK_SCREEN.PAYMENT_CHANNEL
  },
  {
    type: 5,
    tab: '交易状态',
    placeholder: '选择交易状态',
    children: ACCOUNTCHECK_SCREEN.TRADING_STATUS
  }
]

export {
  ACCOUNTCHECK_SCREEN,
  SHOW_ACCOUNTCHECK_SCREEN
}