/**
 * @author: ty
 * @date: 2022-07-20
 * @description: 目前只加入了修改网页标题的功能；
 */
import getPageTitle from '@/utils/get-page-title'
import router from './router'

router.beforeEach(async (to, from, next) => {

  // set page title
  document.title = getPageTitle(to.meta.title)

  // determine whether the user has logged in
  // const hasToken = getToken()

  // 允许所有的路由通过
  next()
})
