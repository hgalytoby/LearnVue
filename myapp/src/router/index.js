import { createRouter, createWebHistory } from 'vue-router'
import Center from '@/views/Center'
import Cinema from '@/views/Cinema'
import Film from '@/views/Film'

const routes = [
  {
    path: '/film',
    component: Film
  },
  {
    path: '/cinema',
    component: Cinema
  },
  {
    path: '/center',
    component: Center
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
