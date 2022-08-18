// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'bootstrap'

import App from './App'
import router from './router'

Vue.config.productionTip = false;
Vue.use(VueAxios, axios)

axios.defaults.withCredentials = true; //把cookie存在vue的server裡面

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})

// to 要去的路由 from 現在的路由 next放行的路由，指要執行的router
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
      const api = `${process.env.APIPATH}/api/user/check`;
      axios.post(api).then((response) => {
      console.log("response.data",response.data);
      if(response.data.success) {
        next()
      } else {
        next({
          path: '/login',
        });
      }
    });
  } else {
    next()
  }
  // 返回 false 以取消导航
  // return false
})
