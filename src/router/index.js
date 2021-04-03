import { createWebHistory, createRouter } from 'vue-router'
import Home from '@vue/views/Home'
import Projects from '@vue/views/Projects'
import AboutMe from '@vue/views/About'
import Achievements from '@vue/views/Achievements'
import BeSocial from '@vue/views/BeSocial'

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
  },
  {
    path: '/#about-me',
    name: AboutMe,
    component: AboutMe
  },
  {
    path: '/#achievements',
    name: Achievements,
    component: Achievements
  },
  {
    path: '/#be-social',
    name: BeSocial,
    component: BeSocial
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
