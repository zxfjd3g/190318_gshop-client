import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>'
})
/* new Vue({
  // el: '#app',
  render: h => h(App)  // 函数返回组件标签<App/>
  // render: createElement => createElement(App)
}).$mount('#app') */