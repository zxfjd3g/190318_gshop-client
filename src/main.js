import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Header from 'components/Header/Header.vue'

import './api'

Vue.config.productionTip = true // 禁止在 Vue 启动时的生产提示

// 注册全局组件
Vue.component('Header', Header)

/* new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>',
  router, // 配置路由器
}) */
new Vue({
  // el: '#app',
  render: h => h(App),  // 函数返回组件标签<App/>
  // render: createElement => createElement(App)
   router, // 配置路由器
}).$mount('#app')