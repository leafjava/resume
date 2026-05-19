import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/gwdc',
      name: 'gwdc',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/GWDC.vue'),
    },
    {
      path: '/achievement',
      name: 'achievement',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Achievement.vue'),
    },
    {
      path: '/achievement2',
      name: 'achievement2',
      component: () => import('../views/Achievement2.vue'),
    },
    {
      path: '/achievement3',
      name: 'achievement3',
      component: () => import('../views/Achievement3.vue'),
    },
    {
      path: '/achievement4',
      name: 'achievement4',
      component: () => import('../views/Achievement4.vue'),
    },
    {
      path: '/achievement5',
      name: 'achievement5',
      component: () => import('../views/Achievement5.vue'),
    },
    {
      path: '/achievement4',
      name: 'achievement4',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Achievement4.vue'),
    }
  ],
})

export default router
