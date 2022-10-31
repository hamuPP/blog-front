/*
 * @Descripttion: 计数器(用于判断登录401的拦截)
 * @version: 1.0
 * @Author: qml
 * @Date: 2020-12-21 15:15:04
 */
function counter() {
  let count = 0;
  return {
    resetCounter:function(){
      count=0;
    },
    increase: function() {
       ++count;
    },
    decrease: function() {
       --count;
    },
    getCount: function () {
       return count;
    }
  }
}
const Counter = counter();
export default Counter;