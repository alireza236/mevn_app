import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import Vuetify from 'vuetify'
import store from './store/store'
import Axios from 'axios'
import 'vuetify/dist/vuetify.css'
import colors from 'vuetify/es5/util/colors'

Vue.prototype.$http = Axios;

const token = localStorage.getItem('token')

if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

Vue.use(Vuetify, {
  iconfont: 'mdi',
  theme: {
    primary: colors.purple,
    secondary: colors.grey.darken1,
    accent: colors.shades.black,
    error: colors.red.accent3
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
