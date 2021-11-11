import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/components/Home'),
      meta: {
          title: '运维平台'
      },
      children: [{
          path: '/abc',
          name: 'Login',
          component: () => import('@/components/Login'),
          meta: {
            title: '你好啊'
          }
        },
        {
          path: '/a',
          name: 'Test',
          component: () => import('@/components/Test'),
        }
      ]
    }
  ]
})
