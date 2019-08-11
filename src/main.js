import Vue from 'vue'
import {Button} from 'mint-ui'
import VueLazyload from 'vue-lazyload'

import loading from './common/images/loading.gif'
import './filters'
import './mock/mock-server'
import App from './App.vue'
import store from './store'
import router from './router'
import Header from 'components/Header/Header.vue'
import Star from 'components/Star/Star.vue'
import CartControl from 'components/CartControl/CartControl.vue'
import Split from 'components/Split/Split.vue'

// 声明使用vue插件 ==> 全局指令lazy
Vue.use(VueLazyload, {
  loading,
})

Vue.prototype.$eventBus = new Vue()
Vue.config.productionTip = false // 去掉提示输出

// 注册全局组件
Vue.component('Header', Header)
Vue.component('Star', Star)
Vue.component('CartControl', CartControl)
Vue.component('Split', Split)
Vue.component(Button.name, Button)  // mt-button

new Vue({
  // el: '#app',
  render: h => h(App),  // 函数返回组件标签<App/>
  // render: createElement => createElement(App)
   router, // 配置路由器
   store, // 配置vuex的store
}).$mount('#app')