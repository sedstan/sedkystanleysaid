<template>
  <!-- Header -->
  <Header />
  <!-- Main -->
  <main>
    <Home />
    <Projects />
    <AboutMe />
    <Achievements />
    <BeSocial />
  </main>
  <!-- Footer -->
  <Footer />
  <!-- Bottom Navigation -->
  <MobileNav />
</template>

<script>
import Header from '@/components/Header'
import Home from '@/views/Home.vue'
import Projects from '@/views/Projects.vue'
import AboutMe from '@/views/AboutMe.vue'
import Achievements from '@/views/Achievements.vue'
import BeSocial from '@/views/BeSocial.vue'
import Footer from '@/components/Footer.vue'
import MobileNav from '@/components/MobileNav.vue'

export default {
  components: {
    Header,
    Home,
    Projects,
    AboutMe,
    Achievements,
    BeSocial,
    Footer,
    MobileNav
  }
}
</script>

<style>
#app {
  font-family: Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
