<template>
  <div class="lg:container lg:flex">
    <div class="lg:w-4/12">
      <!-- TODO: LOGO HERE  -->
      <img src="https://via.placeholder.com/96" />
    </div>
    <nav class="lg:w-8/12">
      <ul class="lg:flex lg:justify-between lg:flex-auto">
        <li v-for="link in notHomeLinks" :key="link.id" class="">
          <router-link :to="`${link.page}`"
            ><span class="text-lg">{{ link.emoji }}</span
            ><span class="text-xs font-black">{{ link.name }}</span></router-link
          >
        </li>
      </ul>
    </nav>
  </div>
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
