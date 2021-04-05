<template>
  <!-- TODO: Add navbar with emojis -->
  <div></div>
  <nav class="flex justify-center lg:hidden">
    <ul>
      <li v-for="link in links" :key="link.id" class="flex-auto">
        <router-link :to="`${link.page}`">{{ link.name }}</router-link>
      </li>
    </ul>
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
