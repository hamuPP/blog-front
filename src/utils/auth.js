const TokenKey = 'access_token'
const RefreshTokenKey = 'refresh_token'

export function getToken () {
  return sessionStorage.getItem(TokenKey)
}

export function setToken (token) {
  return sessionStorage.setItem(TokenKey, token)
}

export function removeToken () {
  return sessionStorage.removeItem(TokenKey)
}

/**
 * 新加一个存储refresh_token的方法
 * @param token
 * @author ty
 * @createtime 2021年03月03日15:51:15
 */
export function setRefreshToken (token) {
  return sessionStorage.setItem(RefreshTokenKey, token)
}

/**
 * 新加一个移除refresh_token的方法
 * @param token
 * @author ty
 * @createtime 2021年03月03日15:51:15
 */
export function removeRefreshToken (token) {
  return sessionStorage.removeItem(RefreshTokenKey, token)
}

export function clearCookie() {
  var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
  if (keys) {
    for (var i = keys.length; i--;) {
      document.cookie = keys[i] + '=0;path=/;expires=' + new Date(0).toUTCString();//清除当前域名下的,例如：m.kevis.com
      document.cookie = keys[i] + '=0;path=/;domain=' + document.domain + ';expires=' + new Date(0).toUTCString();//清除当前域名下的，例如 .m.kevis.com
      document.cookie = keys[i] + '=0;path=/;domain=kevis.com;expires=' + new Date(0).toUTCString();//清除一级域名下的或指定的，例如 .kevis.com
    }
  }
  console.log('已清除');
};

