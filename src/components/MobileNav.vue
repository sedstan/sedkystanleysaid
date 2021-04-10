<template>
  <div
    class="lg:hidden bg-barnRed text-oldLace font-black fixed w-full h-14 flex flex-row justify-center items-center align-center"
  >
    <nav
      id="full-menu"
      class="hidden w-full bg-barnRed text-oldLace font-titillium font-black text-2xl absolute bottom-14 p-4 border-b border-oldLace"
    >
      <ul class="flex flex-col w-full">
        <li class="nav__item--bottom-border flex-auto" v-for="link in moreMenu" :key="link.id">
          <router-link class="border-b border-oldLace" :to="`${link.page}`" v-on:click="open"
            >{{ link.emoji }}{{ link.name }}</router-link
          >
        </li>
      </ul>
    </nav>
    <nav class="flex-auto">
      <ul class="flex flex-row justify-between">
        <li class="w-full" v-for="link in navbarLinks" :key="link.id">
          <router-link class="flex-auto w-full" :to="`${link.page}`"
            ><span class="text-2xl">{{ link.emoji }}</span
            ><br /><span class="text-xs font-black">{{ link.name }}</span></router-link
          >
        </li>
      </ul>
    </nav>
    <button id="menu-btn" class="flex-auto cursor-pointer text-base focus:outline-none focus:ring-0" @click="open">
      &#x2022; &#x2022; &#x2022;
    </button>
  </div>
</template>

<script>
export default {
  name: 'MobileNav',
  methods: {
    open() {
      const btn = document.querySelector('#menu-btn')
      const menu = document.querySelector('#full-menu')

      btn.classList.toggle('active')
      menu.classList.toggle('hidden')
    }
  },
  data() {
    return {
      links: [
        {
          id: 0,
          name: 'Home',
          page: '/',
          emoji: '\ud83c\udfe0',
          navbar: true,
          moreMenu: false
        },
        {
          id: 1,
          emoji: '\ud83d\udcbc',
          name: 'Projects',
          page: '/#projects',
          navbar: true,
          moreMenu: false
        },
        {
          id: 2,
          emoji: '\ud83d\udc68',
          name: 'About Me',
          page: '/#about-me',
          navbar: false,
          moreMenu: true
        },
        {
          id: 3,
          emoji: '\ud83c\udfc6',
          name: 'Achievements',
          page: '/#achievements',
          navbar: false,
          moreMenu: true
        },
        {
          id: 4,
          emoji: '\ud83d\ude4b',
          name: 'Be Social',
          page: '/#be-social',
          navbar: false,
          moreMenu: true
        }
      ]
    }
  },
  computed: {
    navbarLinks: function () {
      return this.links.filter(function (l) {
        return l.navbar
      })
    },
    moreMenu: function () {
      return this.links.filter(function (l) {
        return l.moreMenu
      })
    }
  }
}
</script>

<style>
.nav__item--bottom-border {
  border-bottom: 1px solid oldLace;
}
</style>
