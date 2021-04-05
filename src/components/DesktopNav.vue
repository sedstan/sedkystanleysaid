<template>
  <nav class="hidden lg:flex lg:justify-center">
    <ul>
      <li v-for="link in links" :key="link.id" class="flex-auto">
        <router-link :to="`${link.page}`">{{ link.name }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'DesktopNav',
  data() {
    return {
      links: [
        {
          id: 0,
          name: 'Home',
          page: '/'
        },
        {
          id: 1,
          name: 'Projects',
          page: '/#projects'
        },
        {
          id: 2,
          name: 'About Me',
          page: '/#about-me'
        },
        {
          id: 3,
          name: 'Achievements',
          page: '/#achievements'
        },
        {
          id: 4,
          name: 'Be Social',
          page: '/#be-social'
        }
      ]
    }
  }
}
</script>

<style></style>
