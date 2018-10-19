import React from 'react'
import { Input, Select, Tabs, Button } from 'antd'
import Animate from 'rc-animate'

import IconTag from '../IconTag'
import './index.styl'
import { SHOW_ACCOUNTCHECK_SCREEN } from '../../common/screeningStaticData'
import PropTypes from 'prop-types'
const Search = Input.Search
const Option = Select.Option
const TabPane = Tabs.TabPane
const EnterButton = () => (<div className="search-component-btn"><IconTag type="search-icon" /></div>)
class SearchComponent extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
      show: false,
      height: 'auto'
    }
  }
  handleAnimateClick = () => {
    this.setState({
      show: true
    })
  }
  handleSelectChange = (e, option, type) => {
    console.log(e, option.map(v => v.props), type)
  }
  render () {
    return (
      <div className="search-component">
        <div className="search-component-container" style={{width: this.props.width}}>
          <div className="fuzzy-search">
            <Search
              className="fuzzy-search-content"
              placeholder="请输入关键字"
              onSearch={value => console.log(value)}
              enterButton = {<EnterButton />}
            />
          </div>
          <div onClick={this.handleAnimateClick} className="advanced-search-name">高级搜索</div>
        </div>
        <Animate
         showProp="visible"
         transitionName="height"
        >
        {
        this.state.show ?
          <div visible="true" key="0" className="advanced-search-main" style={{width: this.props.width}}>
          {
            this.props.typeArray ? (
            <Tabs className="advanced-search-container" defaultActiveKey={this.props.typeArray[0].toString()}>
              {
              this.props.typeArray.map(v => (
                SHOW_ACCOUNTCHECK_SCREEN.map(k => {
                  return v === k.type ? (
                    <TabPane className="advanced-search-content" tab={k.tab} key={v}>
                      <div className="advanced-search-select">
                        <div className="advanced-search-select-container" style={{width: this.props.width - 78}}>
                          <Select
                            className="advanced-search-select-content"
                            mode="multiple"
                            size="default"
                            placeholder={v.placeholder}
                            onChange={(e, option) => this.handleSelectChange(e, option, k.type)}
                            style={{ width: '100%' }}
                          >
                            {k.children.length > 0 ? (
                              k.children.map((v, i) => (<Option type={v.type} value={v.value} key={v.type}>{v.value}</Option>))
                            ) : null}
                          </Select>
                        </div>
                        <Button type="primary" className="advanced-search-btn">查询</Button>
                      </div>
                  </TabPane> 
                  ): null
                }
                )
                ))
             }
            </Tabs>
            ) : null
          }
        </div> : null
        }
        </Animate>
      </div>
    )
  }
}

SearchComponent.propTypes = {
  typeArray: PropTypes.array,
  width: PropTypes.number
}
export default SearchComponent
