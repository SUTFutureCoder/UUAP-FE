import Vue from 'vue'
import Router from 'vue-router'
import * as RouterPath from 'constants/RouterPaths'
import Hello from 'pages/Hello'
import Login from 'pages/login/Index'
import Register from 'pages/register/Index'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: RouterPath.PAGES_HOME,
    //   component: Hello
    // },
    {
      path: RouterPath.PAGES_LOGIN,
      component: Login
    },
    {
      path: RouterPath.PAGES_REGISTER,
      component: Register
    }

  ]
})
