// var util = {}


// 封装检测数组是否存在值 indexof的原生写法
export const inArray = (need:any, arr:any) => {
    for (let key = 0; key < arr.length; key++) {
      // eslint-disable-next-line eqeqeq
      if (need == arr[key]) {
        return key
      }
    }
    return -1
  }
  
  export const gettype = (url:any) => {
    if (url.indexOf('?') === 1) { return false }
    url = url.substr(1)
    url = url.split('&')
    let name
    let nameres
    // 获取全部参数及其值
    for (let i = 0; i < url.length; i++) {
      const info = url[i].split('=')
      const obj = {};
      (obj as any)[info[0]] = decodeURI(info[1])
      url[i] = obj
    }
    // 如果传入一个参数名称，就匹配其值
    if (name) {
      for (let j = 0; j < url.length; j++) {
        for (const key in url[j]) {
          if (key === name) {
            nameres = url[j][key]
          }
        }
      }
    } else {
      nameres = url
    }
    // 返回结果
    return nameres
  }
  // 时间戳的转换
  // @param  string  format
  // @param  integer timestamp
  // @return string
  // 使用格式： util.date('Y-m-d H:i:s',new Date().getTime()/1000)
  
  // 3 'Y-m-d H:i:s' 字符串格式，通过秒数，获取到'2020/11/23 00:00:00' 字符串
  // 在倒计时中，秒数自减，调用该方法获取一个；
  export const date = (format:any, timestamp:any) => {
    const date = (timestamp > 0) ? new Date(timestamp * 1000) : new Date()
    const regex = /[a-zA-Z]/g
    function _supplement (value:any) {
      return (value < 10) ? '0' + value : value
    }
    function _replace (match:any) {
      switch (match) {
        case 'Y':
          return date.getFullYear()
          break
        case 'm':
          return _supplement(date.getMonth() + 1)
          break
        case 'd':
          return _supplement(date.getDate())
          break
        case 'H':
          return _supplement(date.getHours())
          break;
        case 'i':
          return _supplement(date.getMinutes())
          break;
        case 's':
          return _supplement(date.getSeconds())
          break;
      }
    }
    return format.replace(regex, _replace)
  }
  // 日期格式
  export const formatDate = (date:any) => {
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDate();
    var dateStr = "" + year;
    if(month + 1 < 10) dateStr += ("-0"+(month+1));
    else dateStr += ("-"+(month+1));
    if(day < 10) dateStr += ("-0"+day);
    else dateStr += ("-"+day);
    return dateStr;
  } 
  //  数组去重
  export const unique = (arr:any) => {
    return Array.from(new Set(arr))
  }
  // 数组对象去重
  export const objque = (person:any) => {
    const obj = {}
    person.reduce((cur:any, next:any) => {
      (obj as any)[(next as any).id] ? '' : (obj as any)[(next as any).id] = true && cur.push(next)
      return cur
    })
  }
  
  export const reg = /^([a-zA-Z\d][\w-]{2,})@(\w{2,})\.([a-z]{2,})(\.[a-z]{2,})?$/