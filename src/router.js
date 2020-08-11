import Vue from 'vue'
import Router from 'vue-router'

// 解决两次访问相同路由地址报错
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

export const router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('./views/index.vue'),
      meta: {
        title: '远东'
      }
    },
    {
      path: '/project',
      name: 'project',
      component: () => import('./views/project.vue'),
      meta: {
        title: '项目'
      }
    },
    {
      path: '/technology',
      name: 'technology',
      component: () => import('./views/technology.vue'),
      meta: {
        title: '技术'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/thenatty.vue'),
      meta: {
        title: '关于'
      }
    },
    {
      path: '*',
      name: 'error',
      component: () => import('./views/error.vue'),
      meta: {
        title: '迷路了'
      }
    }
  ]
})


router.afterEach((to) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title
  }else {
    document.title = '远东'
  }
})
