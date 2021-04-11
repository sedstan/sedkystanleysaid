<template>
  <nav class="hidden lg:container lg:flex lg:justify-end lg:w-10/12">
    <ul class="lg:flex-row">
      <li v-for="link in notHomeLinks" :key="link.id" class="flex-auto">
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
          name: 'Home',
          page: '/',
          emoji: '\ud83c\udfe0',
          notHomeLink: false
        },
        {
          id: 1,
          emoji: '\ud83d\udcbc',
          name: 'Projects',
          page: '/#projects',
          notHomeLink: true
        },
        {
          id: 2,
          emoji: '\ud83d\udc68',
          name: 'About Me',
          page: '/#about-me',
          notHomeLink: true
        },
        {
          id: 3,
          emoji: '\ud83c\udfc6',
          name: 'Achievements',
          page: '/#achievements',
          notHomeLink: true
        },
        {
          id: 4,
          emoji: '\ud83d\ude4b',
          name: 'Be Social',
          page: '/#be-social',
          notHomeLink: true
        }
      ]
    }
  },
  computed: {
    notHomeLinks: function () {
      return this.links.filter(function (l) {
        return l.notHomeLink
      })
    }
  }
}
</script>

<style></style>
