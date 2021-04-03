import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/#projects',
    name: 'Projects',
    component: () => import('../views/Projects.vue')
  },
  {
    path: '/#about-me',
    name: 'AboutMe',
    component: () => import('../views/AboutMe.vue')
  },
  {
    path: '/#achievements',
    name: 'Achievements',
    component: () => import('../views/Achievements.vue')
  },
  {
    path: '/#be-social',
    name: 'BeSocial',
    component: () => import('../views/BeSocial.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
