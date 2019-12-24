// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'font-awesome/css/font-awesome.min.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'font-awesome/css/font-awesome.min.css'

Vue.use(VueAxios,axios);
// axios.defaults.baseURL = '/api';
// axios.defaults.baseURL = 'http://192.168.50.197:8080/';
axios.defaults.baseURL = 'http://192.168.1.2:8080/';
axios.defaults.withCredentials = true; //一定要加上，解决因为跨域问题引起的后端sessionId不同导致取不到session中的验证码问题
Vue.use(MintUI);
Vue.config.productionTip = false;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
