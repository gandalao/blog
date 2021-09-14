import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home/home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/article',
    name: 'article',
    component: () => import('@/views/article/article.vue')
  },
  {
    path: '/message',
    name: 'message',
    component: () => import('@/views/message/message.vue')
  },
  {
    path: '/link',
    name: 'link',
    component: () => import('@/views/link/link.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/about/about.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
