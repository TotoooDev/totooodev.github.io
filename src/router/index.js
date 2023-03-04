import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DurianView from '../views/DurianView.vue'
import KiwiView from '../views/KiwiView.vue'
import AboutView from '../views/AboutView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/durian',
    name: 'durian',
    component: DurianView
  },
  {
    path: '/kiwi',
    name: 'kiwi',
    component: KiwiView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
