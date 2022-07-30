import Vue from 'vue'
import Router from 'vue-router'
import NotFound from '@/pages/404'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/About',
      component: () => import('./pages/About.vue')
    },
    {
      path: '/Home',
      component: () => import('./pages/Home.vue')
    },
    {
      path: '/Labels',
      component: () => import('./pages/Labels.vue')
    },
    {
      path: '/Money',
      component: () => import('./pages/Money.vue')
    },
    {
      path: '/Statistics',
      component: () => import('./pages/Statistics.vue')
    },
    {
      path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound
    }
  ]
})
