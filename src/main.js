import Vue from 'vue'
import App from './App.vue'
import system from 'vue-design-system'
import 'vue-design-system/dist/system.css'

Vue.use(system)

new Vue({
  el: '#app',
  render: h => h(App)
})
