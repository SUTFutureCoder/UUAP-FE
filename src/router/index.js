import Vue from 'vue'
import Router from 'vue-router'
import * as RouterPath from 'constants/RouterPaths'
import Login from 'pages/login/Index.vue'
import Register from 'pages/register/Index.vue'
import Audit from 'pages/audit/Index.vue'
import AuditMe from 'pages/audit/user/AuditMe.vue'
import AuditAuthorized from 'pages/audit/user/AuditAuthorized.vue'
import AuditPrivate from 'pages/audit/user/AuditPrivate.vue'
import AuditDevApply from 'pages/audit/dev/AuditApply.vue'
import AuditDevSdk from 'pages/audit/dev/AuditSdk.vue'
import AuditDevApp from 'pages/audit/dev/AuditApp.vue'
import AuditDevSetting from 'pages/audit/dev/AuditSetting.vue'


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
    },
    {
      path: RouterPath.PAGES_AUDIT,
      component: Audit,
        children: [
            //用户
            { path: RouterPath.PAGES_AUDIT_ME, component: AuditMe},
            { path: RouterPath.PAGES_AUDIT_AUTHORIZED, component: AuditAuthorized},
            { path: RouterPath.PAGES_AUDIT_PRIVATE, component: AuditPrivate},
            //开发者
            { path: RouterPath.PAGES_AUDIT_DEV_APPLY, component: AuditDevApply},
            { path: RouterPath.PAGES_AUDIT_DEV_SDK, component: AuditDevSdk},
            { path: RouterPath.PAGES_AUDIT_DEV_APP, component: AuditDevApp},
            { path: RouterPath.PAGES_AUDIT_DEV_SETTING, component: AuditDevSetting},
        ]
    }

  ]
})
