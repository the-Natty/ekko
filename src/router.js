import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue'),
      meta: {
        title: 'Ekko の Page'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
      meta: {
        title: 'About Ekko'
      }
    },
    {
      path: '*',
      name: '404',
      component: () => import('./views/404.vue'),
      meta: {
        title: '404 Page'
      }
    }
  ]
})


router.afterEach((to) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title
  }else {
    document.title = 'Ekko の Page'
  }
})
