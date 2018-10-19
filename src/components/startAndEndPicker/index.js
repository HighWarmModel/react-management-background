import React from 'react'
import { DatePicker } from 'antd'
import './index.styl'
import CommonClass from '../../utils/commonClass'
export default class StartAndEndPicker extends React.Component{
  state = {
    startValue: null,
    endValue: null,
    endOpen: false,
  };
  // 禁用开始时间
  disabledStartDate = (startValue) => {
    const endValue = this.state.endValue;
    if (startValue && new Date(CommonClass.getDateTime(startValue.valueOf(), 'YYYY/MM/DD')).getTime() > new Date(CommonClass.getDateTime(new Date(), 'YYYY/MM/DD')).getTime()) {
      return true;
    }
    if (!startValue || !endValue) {
      return false;
    }
    return new Date(CommonClass.getDateTime(startValue.valueOf(), 'YYYY/MM/DD')).getTime() > new Date(CommonClass.getDateTime(endValue.valueOf(), 'YYYY/MM/DD')).getTime()
  }
  // 禁用结束时间
  disabledEndDate = (endValue) => {
    const startValue = this.state.startValue;
    if (endValue && new Date(CommonClass.getDateTime(endValue.valueOf(), 'YYYY/MM/DD')).getTime() > new Date(CommonClass.getDateTime(new Date(), 'YYYY/MM/DD')).getTime()) {
      return true;
    }
    if (!endValue || !startValue) {
      return false;
    }
    return new Date(CommonClass.getDateTime(endValue.valueOf(), 'YYYY/MM/DD')).getTime() < new Date(CommonClass.getDateTime(startValue.valueOf(), 'YYYY/MM/DD')).getTime()
  }

  onChange = (value, type) => {
    this.setState({
      [type]: value,
    })
    this.props.handleStartEndDateProps(CommonClass.getDateTime(value.valueOf(), 'YYYY/MM/DD 00:00:00'), type)
  }

  onStartChange = (value) => {
    this.onChange('startValue', value);
  }

  onEndChange = (value) => {
    this.onChange('endValue', value);
  }

  handleStartOpenChange = (open) => {
    if (!open) {
      this.setState({ endOpen: true });
    }
  }

  handleEndOpenChange = (open) => {
    this.setState({ endOpen: open });
  }

  render() {
    const { startValue, endValue, endOpen } = this.state;
    return (
      <div className="start-end-picker">
        <DatePicker
          className="start-end-picker-content"
          disabledDate={this.disabledStartDate}
          format="YYYY-MM-DD"
          value={startValue}
          placeholder="开始时间"
          dateRender={(current) => {
            const style = {};
            if (current.date() === 1) {
              style.border = '1px solid #1890ff';
              style.borderRadius = '50%';
            }
            return (
              <div className="ant-calendar-date" style={style}>
                {current.date()}
              </div>
            );
          }}
          onChange={(e) => this.onChange(e, 'startValue')}
          onOpenChange={this.handleStartOpenChange}
        />
        <span className="cutting-line">——</span>
        <DatePicker
          className="start-end-picker-content"
          disabledDate={this.disabledEndDate}
          format="YYYY-MM-DD"
          value={endValue}
          placeholder="结束时间"
          onChange={(e) => this.onChange(e, 'endValue')}
          open={endOpen}
          dateRender={(current) => {
            const style = {};
            if (current.date() === 1) {
              style.border = '1px solid #1890ff';
              style.borderRadius = '50%';
            }
            return (
              <div className="ant-calendar-date" style={style}>
                {current.date()}
              </div>
            );
          }}
          onOpenChange={this.handleEndOpenChange}
        />
      </div>
    );
  }
}