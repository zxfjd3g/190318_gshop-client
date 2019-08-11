/* 
路由器对象模块
*/
import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '../store'
import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history', // 没有#
  // 应用中所有路由
  routes
})

// 所有需要进行登陆登陆检查的path
const paths = ['/a', '/b']

// 定义全局前置守卫
router.beforeEach((to, from, next) => {
  const path = to.path
  // 如果目标path是需要检查的, 判断用户如果不存在, 跳转到登陆界面
  if (paths.indexOf(path) !== -1 && !store.state.user.user._id) {
    return next('/login')
  }
  // 放行
  next()
})

export default router