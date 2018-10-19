// 财务统计
import React from 'react'
import { Table } from 'antd'
import StartAndEndPicker from '../../components/startAndEndPicker'
import SearchComponent from '../../components/searchComponent'
import './index.styl'
const columns = [{
  title: '序号',
  dataIndex: 'ID',
  align: 'center',
render: (text, record) => {
return <span>{text}</span>
},
}, {
  title: '服务区',
  className: 'common-class',
  align: 'center',
  dataIndex: 'SERVERPART_NAME',
}, {
  title: '门店名称',
  className: 'common-class',
  align: 'center',
  dataIndex: 'SHOPNAME',
}, {
  title: '统计日期',
  className: 'common-class',
  align: 'center',
  dataIndex: 'SELLDATA_DATE',
}, {
  title: '交易金额', // 修改
  className: 'common-class',
  align: 'center',
  dataIndex: 'FACTAMOUNT',
}, {
  title: '手续费',
  align: 'center',
  className: 'common-class',
  dataIndex: 'TAXFEE',
}, {
  title: '到账金额',
  className: 'common-class',
  align: 'center',
  dataIndex: 'LIQUIDATION_AMOUNT',
}, {
  title: '退款笔数',
  align: 'center',
  className: 'common-class',
  dataIndex: 'REFUND_COUNT',
},{
  title: '退款金额',
  align: 'center',
  className: 'common-class',
  dataIndex: 'REFUND_AMOUNT',
},
{
  title: '移动支付通道',
  align: 'center',
  className: 'common-class',
  dataIndex: 'PAYMENT_CHANNEL',
}];

let data = [{
  key: '1',
  ID: 'NO.1',
  SERVERPART_NAME: '长安服务区',
  SHOPNAME: '哇奥便利店',
  REFUND_COUNT: '12',
  SELLDATA_DATE: '20181010',
  FACTAMOUNT: '260.00',
  TAXFEE: '1.00',
  LIQUIDATION_AMOUNT: '259.00',
  PAYMENT_CHANNEL: '客无忧',
  REFUND_AMOUNT: '1000.00'
}]
for (let i = 2; i < 1000; ++i) {
  data.push({
    key: i,
    ID: 'NO.' + i,
    SERVERPART_NAME: '长安服务区',
    SHOPNAME: '哇奥便利店',
    REFUND_COUNT: '12',
    SELLDATA_DATE: '20181010',
    FACTAMOUNT: '260.00',
    TAXFEE: '1.00',
    LIQUIDATION_AMOUNT: '259.00',
    PAYMENT_CHANNEL: '客无忧',
    REFUND_AMOUNT: '1000.00'
  })
}
class FinancialStatistics extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
      total: 100, // 总条数
      current: 1, // 当前页码
      screening: { // 筛选

      },
      startDate: '',
      endDate: '',
      fuzzy: '' // 模糊查询
    }
  }
  handleStartEndDateProps = (val, type) => {
    console.log(val, type)
  }
  handleSreeningProps = (val, type) => {

  }
  render () {
    const {total, current} = this.state
    return (<div className="financial-details">
      <h5 className="title">财务统计</h5>
      <div className="demand-main">
        <div className="trading-hours">
          <span className="name">交易时间：</span>
          <div className="trading-hours-content">
            <StartAndEndPicker handleStartEndDateProps={this.handleStartEndDateProps} />
          </div>
        </div>
        <div className="demand-main-right">
          <SearchComponent typeArray={[1,2,4]} width={300} handleSreeningProps={this.handleSreeningProps} />
        </div>
      </div>
      <div className="financial-details-main">
        <Table
        components={<table className="financial-details-table"></table>}
        rowClassName="financial-details-content"
        className="financial-details-container"
        columns={columns}
        dataSource={data}
        bordered
        pagination={{ position:"bottom",
                      current,
                      size:"big",
                      pageSize:20,
                      itemRender: (page, type = 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next', originalElement) => {
                        console.log(type)
                        switch (type) {
                          case 'page':
                           return <span>{page}</span>
                          // case 'prev':
                          //   return <Icon type="left" theme="outlined" />
                          // case 'next':
                          //   return <Icon type="right" theme="outlined" />
                          default:
                            return originalElement
                        }
                      },
                      // defaultPageSize: 20,
                      total,
                      showQuickJumper: true
                    }}
      />
      </div>
    </div>)
  }
}
export default FinancialStatistics