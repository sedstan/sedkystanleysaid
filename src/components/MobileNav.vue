<template>
  <nav class="">
    <router-link v-for="link in links" :key="link.id" :to="`${link.page}`">{{ link.name }}</router-link>
  </nav>
</template>

<script>
export default {
  name: 'MobileNav',
  data() {
    return {
      links: [
        {
          id: 0,
          name: 'Projects',
          page: '/#projects'
        },
        {
          id: 1,
          name: 'About Me',
          page: '/#about-me'
        },
        {
          id: 2,
          name: 'Achievements',
          page: '/#achievements'
        },
        {
          id: 3,
          name: 'Be Social',
          page: '/#be-social'
        }
      ]
    }
  }
}
</script>

<style></style>
