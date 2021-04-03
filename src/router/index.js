import { createWebHistory, createRouter } from 'vue-router'
import Home from '@vue/views/Home.vue'
import Projects from '@vue/views/Projects.vue'
import AboutMe from '@vue/views/About.vue'
import Achievements from '@vue/views/Achievements.vue'
import BeSocial from '@vue/views/BeSocial.vue'

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
  },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
