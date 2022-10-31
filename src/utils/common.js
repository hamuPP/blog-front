import CryptoJS from 'crypto-js'  //引入加密

/**
 * 打开全屏或者局部loading
 * target：全局添加传入string，局部添加传入arr
 * @param {obj}  target:需要添加loading的对象可以是string(单个)、arr（多个）;
 * Loading的使用方法：
 * 在页面中引入Loading的公共方法
 * 在页面中使用格式为openLoading({
                      scope: this,
                      target: ["需要加Loading的对象"],  ------局部Loading使用数组格式
                      target: "需要加Loading的对象",    ------全部Loading使用字符串格式
                    });
 */
const openLoading = (opt) => {
  let { scope, target } = opt;
  let customClass;
  scope.loadingInstance || (scope.loadingInstance = {});
  //需要加多个loading的情况
  if (target.constructor == Array) {
    customClass = 'sap-loading1';
    for (let i = 0; i < target.length; i++) {
      if(scope.loadingInstance[target[i]]){
        scope.loadingInstance[target[i]].close()
      }
      scope.loadingInstance[target[i]] = scope.$loading({
        lock: true,
        target: target[i],
        customClass: customClass,
        spinner: 'el-icon-loading',
      });
    //   console.log(scope.loadingInstance,'222222')
    }
  } else {
    //只加一个loading
    scope.loadingInstance[0] = scope.$loading({
      customClass: 'sap-loading2',
      lock: true,
      target: target,
      spinner: 'el-icon-loading',
    });
  }
};

/**
* 与打开全屏或者局部loading的方法相对应，关闭loading
* @param {obj}  target:对象可以是string(单个)、arr（多个）;
*/
const closeLoading = (opt) => {
  let { scope, target } = opt;
  if (scope.loadingInstance) {
    if (scope.loadingInstance[0]) {
      scope.loadingInstance[0].close()
    }
    else if (target.constructor == Array) {
      for (let i = 0; i < target.length; i++) {
        if (scope.loadingInstance) {
          scope.loadingInstance[target[i]].close();
        //   console.log(scope.loadingInstance,'333333')
        }
      }
    }
    else {
      scope.loadingInstance[target].close();
    }
  }
};

/**
 * 判断操作是否成功
 * @param {data}  res:返回值
 * @param {string} type:操作类型
 * @param {obj} scope:this对象
 */
const actSuccess = (res, type, scope) => {
  if (res && res.data && res.data.code == "0000") {
    scope.$message({
      showClose: true,
      message: type + "成功",
      type: "success",
    });
  } else {
    scope.$message({
      showClose: true,
      message: type + "失败",
      type: "error",
    });
  }
}

/**
* 通过AES加密
* @param {data} 加密信息的名字
* @param {key} 需要加密的信息
*/
const encryption = (params) => {
  let {
    data,
    type,
    key
  } = params
  if (type === 'Base64') {
    return btoa(data)
  } else {
    key = CryptoJS.enc.Latin1.parse(key)
    let iv = key
    // 加密
    let encrypted = CryptoJS.AES.encrypt(
      data,
      key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.ZeroPadding
    })
    return encrypted.toString()
  }
}

/**
 * 获取指定格式的时间，目前只能获取一种YYYY-MM-DD HH:MM:SS
 * @param formate
 * @param today
 * @author ty
 */
const getFormatedTime = (formate = 'YYYY-MM-DD HH:MM:SS', today = new Date()) => {
  const yyyy = today.getFullYear();
  const MM = ('0' + (today.getMonth() + 1)).slice(-2);
  const dd = ('0' + today.getDate()).slice(-2);
  const hh = ('0' + today.getHours()).slice(-2);
  const mm = ('0' + today.getMinutes()).slice(-2);
  const ss = ('0' + today.getSeconds()).slice(-2);
  switch (formate) {
    case 'YYYY-MM-DD':
      return `${yyyy}-${MM}-${dd}`;
    case 'YYYY-MM-DD HH:MM:SS':
      return `${yyyy}-${MM}-${dd} ${hh}:${mm}:${ss}`;
    default:
      break;
  }
}

/**
* 获取指定格式的时间，目前只能获取一种YYYY-MM-DD HH:MM:SS
* @param formate
* @param hours,当前系统多少小时之后
* @author hcm
*/
const getFormatedAfterTime = (hours, formate = 'YYYY-MM-DD HH:MM:SS') => {
  // 获取两小时之后的时间戳
  let time = new Date().getTime();
  let time2 = time + parseInt(hours) * 60 * 60 * 1000;
  let time3 = new Date(time2)
  const yyyy = time3.getFullYear();
  const MM = ('0' + (time3.getMonth() + 1)).slice(-2);
  const dd = ('0' + time3.getDate()).slice(-2);
  const hh = ('0' + time3.getHours()).slice(-2);
  const mm = ('0' + time3.getMinutes()).slice(-2);
  const ss = ('0' + time3.getSeconds()).slice(-2);
  switch (formate) {
    case 'YYYY-MM-DD':
      return `${yyyy}-${MM}-${dd}`;
    case 'YYYY-MM-DD HH:MM:SS':
      return `${yyyy}-${MM}-${dd} ${hh}:${mm}:${ss}`;
    default:
      break;
  }
}

/**
 * 获取两个时间的时间差（秒）
 * @param time1 开始时间
 * @param time2 结束时间
*/
const timeDiffer = (time1, time2) => {
  let diffTime = new Date(time2) - new Date(time1)
  return diffTime / 1000
}

/**
 * 处理多选Id
 * @param arr 传入的多选数组
 */
 const dealIds= (arr) => {
  if (arr.length > 0) {
      let ids = ''
      arr.forEach(item => {
          ids += item.id + ','
      })
      ids = ids.length > 0 ? ids.substring(ids.length - 1, 0) : ids
      return ids
  }
}


export {
  openLoading,
  closeLoading,
  actSuccess,
  getFormatedTime,
  getFormatedAfterTime,
  timeDiffer,
  encryption,
  dealIds
}
