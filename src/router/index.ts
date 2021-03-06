import { createRouter, createWebHistory } from 'vue-router'
import useAuth from '../hooks/sb-hooks-auth'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import('../views/SignUp.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    name: 'Logout',
    path: '/logout',
    beforeEnter: async () => {
      const { logout } = useAuth()
      await logout()
      return { name: 'Login' }
    }
  },
  {
    name: 'Me',
    path: '/me',
    // beforeEnter: () => {

    // }
    component: () => import('../views/Me.vue')
  },
  {
    name: 'Feed',
    path: '/feed',
    // beforeEnter: () => {

    // }
    component: () => import('../views/Feed.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router