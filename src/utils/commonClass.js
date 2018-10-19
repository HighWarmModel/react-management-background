export default class CommonClass {
  stopFunc (e) {
    e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true
  }
  /**
   * 转[{text:'',value:''}]
   * @param {object} arr 数组 [{a:1,b:2},{a:3,b:4}]
   */
  getFaultArr (arr) {
    let arrClassify = []

    for (let i = 0; i < arr.length; i++) {
      for (let key in arr[i]) {
        let jsonClassify = {
          value: '',
          text: ''
        }
        jsonClassify.value = key
        jsonClassify.text = arr[i][key]
        arrClassify.push(jsonClassify)
      }
    }
    return arrClassify
  }
  // 获取当前或者之前或者之后的时间
  static getDateTime (dd = new Date(), type = 'YYYY/MM/DD hh:mm:ss', daynum = 0) {
    const ddType = Object.prototype.toString.call(dd)
    if (ddType === '[object String]' || ddType === '[object Number]') {
      dd = new Date(dd)
    }
    dd.setDate(dd.getDate() + daynum) // 获取AddDayCount天后的日期
    var y = dd.getFullYear()
    var m = (dd.getMonth() + 1) < 10 ? '0' + (dd.getMonth() + 1) : (dd.getMonth() + 1) // 获取当前月份的日期，不足10补0
    var d = dd.getDate() < 10 ? '0' + dd.getDate() : dd.getDate() // 获取当前几号，不足10补0
    var h = dd.getHours() < 10 ? '0' + dd.getHours() : dd.getHours()
    var mi = dd.getMinutes() < 10 ? '0' + dd.getMinutes() : dd.getMinutes()
    var s = dd.getSeconds() < 10 ? '0' + dd.getSeconds() : dd.getSeconds()
    return type.replace('YYYY', y).replace('MM', m).replace('DD', d).replace('hh', h).replace('mm', mi).replace('ss', s)
  }
  /**
   * 数据归类 （分页格式）[[{a:1,b:2},{a:3,b:4}],[{a:5,b:6}]]//每页2条数据
   * @param {object} 加载的到的数据[{a:1,b:2},{a:3,b:4},{a:5,b:6}]
   * @param {number} 每页几条数据
   */
  dataRank (_data, _num) {
    let b = [
      []
    ]
    for (let i = 0; i < _data.length; i++) {
      for (let key in _data[i]) {
        _data[i][key] = _data[i][key] === '&nbsp;' ? '' : _data[i][key]
      }
      b[b.length - 1].push(_data[i])
      if ((i % _num === (_num - 1))) b.push([])
    }
    if (b[b.length - 1].length === 0) {
      b.pop()
    }
    return b
  }
  /**
   * 添加text和value值
   * @param {object} _data 得到的数据 [{},{}]
   * @param {string} name 名字
   * @param {number} id 标识
   */
  arrangementData (_data, _name, _id) {
    for (let i = 0; i < _data.length; i++) {
      _data[i]['text'] = _data[i][_name]
      _data[i]['value'] = _data[i][_id]
    }
    return _data
  }

  // JS操作cookies方法!

  // 写cookies
  static setCookie (name, value, expireTime = 1000 * 60 * 60 * 24 ) {
    var extime = new Date()
    extime.setTime(extime.getTime() + expireTime)
    document.cookie = name + '=' + escape(value) + ';expires=' + extime.toGMTString()
  }

  // 读取cookies
  static getCookie (name) {
    let reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
    let arr = document.cookie.match(reg)

    if (arr !== null && arr.length !== 0) {
      return (arr[2])
    } else {
      return null
    }
  }

  // 删除cookies
  static delCookie (name) {
    let exp = new Date()
    exp.setTime(exp.getTime() - 1)
    let cval = this.getCookie(name)
    if (cval !== null) {
      document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString()
    }
  }
  // 数字金额转换为大写人民币汉字
  convertCurrency (money) {
    // 汉字的数字
    var cnNums = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖']
    // 基本单位
    var cnIntRadice = ['', '拾', '佰', '仟']
    // 对应整数部分扩展单位
    var cnIntUnits = ['', '万', '亿', '兆']
    // 对应小数部分单位
    var cnDecUnits = ['角', '分', '毫', '厘']
    // 整数金额时后面跟的字符
    var cnInteger = '整'
    // 整型完以后的单位
    var cnIntLast = '元'
    // 最大处理的数字
    var maxNum = 999999999999999.9999
    // 金额整数部分
    var integerNum
    // 金额小数部分
    var decimalNum
    // 输出的中文金额字符串
    var chineseStr = ''
    // 分离金额后用的数组，预定义
    var parts
    if (money === '') {
      return ''
    }
    money = parseFloat(money)
    if (money >= maxNum) {
      // 超出最大处理数字
      return ''
    }
    if (money === 0) {
      chineseStr = cnNums[0] + cnIntLast + cnInteger
      return chineseStr
    }
    // 转换为字符串
    money = money.toString()
    if (money.indexOf('.') === -1) {
      integerNum = money
      decimalNum = ''
    } else {
      parts = money.split('.')
      integerNum = parts[0]
      decimalNum = parts[1].substr(0, 4)
    }
    // 获取整型部分转换
    if (parseInt(integerNum, 10) > 0) {
      var zeroCount = 0
      var IntLen = integerNum.length
      for (var i = 0; i < IntLen; i++) {
        var n = integerNum.substr(i, 1)
        var p = IntLen - i - 1
        var q = p / 4
        var m = p % 4
        if (n - 0 === 0) {
          zeroCount++
        } else {
          if (zeroCount > 0) {
            chineseStr += cnNums[0]
          }
          // 归零
          zeroCount = 0
          // chineseStr += cnNums[parseInt(n)] + cnIntRadice[m]
          chineseStr += cnNums[n - 0] + cnIntRadice[m]
        }
        if (m === 0 && zeroCount < 4) {
          chineseStr += cnIntUnits[q]
        }
      }
      chineseStr += cnIntLast
    }
    // 小数部分
    if (decimalNum !== '') {
      var decLen = decimalNum.length
      for (let i = 0; i < decLen; i++) {
        let n = decimalNum.substr(i, 1)
        if (n - 0 !== 0) {
          chineseStr += cnNums[Number(n)] + cnDecUnits[i]
        }
      }
    }
    if (chineseStr === '') {
      chineseStr += cnNums[0] + cnIntLast + cnInteger
    } else if (decimalNum === '') {
      chineseStr += cnInteger
    }
    return chineseStr
  }
  // 保留两位小数
  provingFloatTwo (price) {
    // return (/^[0-9]+(.[0-9]{1,2})?$/.test(price))
    return (/^[0-9]+(?:\.[0-9]{1,2})?$/.test(price))
  }
  // 正整数
  provingInt (num) {
    return (num !== '' && num > 0 && num % 1 === 0)
  }
  getQueryString (key) {
    let gHref = window.location.href
    let reg = new RegExp('\\?(\\S*)')
    let gHrefArr = gHref.match(reg)
    if (gHrefArr === null || gHrefArr.length < 1) {
      return key === undefined ? [] : undefined
    }
    let queryString = gHref.match(reg)[1].split('/')[0].split('#')[0]
    let arr = queryString.split('&')
    let obj = {}
    arr.forEach(v => {
      let keyName = v.split('=')[0]
      let keyValue = v.split('=')[1]
      obj[keyName] = keyValue
    })
    return key === undefined ? obj : obj[key]
  }
  static getSearchString (search, key) {
    let reg = new RegExp('\\?(\\S*)')
    let gHrefArr = search.match(reg)
    if (gHrefArr === null || gHrefArr.length < 1) {
      return key === undefined ? [] : undefined
    }
    let queryString = search.match(reg)[1]
    let arr = queryString.split('&')
    let obj = {}
    arr.forEach(v => {
      let keyName = v.split('=')[0]
      let keyValue = v.split('=')[1]
      obj[keyName] = keyValue
    })
    return key === undefined ? obj : obj[key]
  }
}
