import Vue from 'vue'
import App from './App.vue'

// Import the Design System
import DesignSystem from 'vue-design-system'
import 'vue-design-system/dist/system.css'

Vue.use(DesignSystem)

new Vue({
  el: '#app',
  render: h => h(App)
})
