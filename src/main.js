import Vue from 'vue'
import {Button} from 'mint-ui'

import './mock/mock-server'
import App from './App.vue'
import store from './store'
import router from './router'
import Header from 'components/Header/Header.vue'
import Star from 'components/Star/Star.vue'


Vue.config.productionTip = false // 去掉提示输出

// 注册全局组件
Vue.component('Header', Header)
Vue.component('Star', Star)
Vue.component(Button.name, Button)  // mt-button

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
   store, // 配置vuex的store
}).$mount('#app')