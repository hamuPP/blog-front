import CryptoJS from 'crypto-js'  //引入加密
/**
 * 通过AES加密
 * @param {data} 加密信息的名字 
 * @param {key} 需要加密的信息 
 */
export const encryption = (params) => {
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