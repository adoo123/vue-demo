import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Test from '@/components/Test'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: '运维平台'
      },
      children: [{
        path: '/abc',
        name: 'Login',
        component: Login,
        meta: {
          title: '你好啊'
          }
        },
        {
          path: '/a',
          name: 'Test',
          component: Test
        }
      ]
    }
  ]
})
