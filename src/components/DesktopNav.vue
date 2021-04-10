<template>
  <nav class="hidden lg:container lg:flex lg:justify-center">
    <ul>
      <li v-for="link in links" :key="link.id" class="flex-auto">
        <router-link :to="`${link.page}`"
          ><span class="text-lg">{{ link.emoji }}</span
          ><span class="text-xs font-black">{{ link.name }}</span></router-link
        >
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
          emoji: '\ud83d\udcbc',
          name: 'Projects',
          page: '/#projects'
        },
        {
          id: 1,
          emoji: '\ud83d\udc68',
          name: 'About Me',
          page: '/#about-me'
        },
        {
          id: 2,
          emoji: '\ud83c\udfc6',
          name: 'Achievements',
          page: '/#achievements'
        },
        {
          id: 3,
          emoji: '\ud83d\ude4b',
          name: 'Be Social',
          page: '/#be-social'
        }
      ]
    }
  }
}
</script>

<style></style>
