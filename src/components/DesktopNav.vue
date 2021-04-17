<template>
  <nav class="lg:w-10/12 lg:flex lg:justify-end lg:items-center">
    <ul class="lg:flex lg:flex-row lg:justify-end">
      <li class="leading-loose lg:mr-16 flex-shrink" v-for="link in notHomeLinks" :key="link.id">
        <router-link class="font-titillium font-black" :to="`${link.page}`"
          ><span class="text-3xl">{{ link.emoji }}</span
          ><br /><span class="text-lg">{{ link.name }}</span></router-link
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
