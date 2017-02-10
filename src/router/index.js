import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'pages/Hello'
// import Login from 'page/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})
