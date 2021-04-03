import { createWebHistory, createRouter } from 'vue-router'
import Home from '@vue/views/home'
import Projects from '@vue/views/projects'

const routes = [
  {
    path: '/',
    name: Home,
    component: Home
  },
  {
    path: '/#projects',
    name: Projects,
    component: Projects
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
