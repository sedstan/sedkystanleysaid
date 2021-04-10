<template>
  <div class="lg:hidden bg-barnRed text-oldLace font-black fixed w-full h-14 flex flex-row justify-center items-center">
    <nav
      id="full-menu"
      class="hidden w-full bg-barnRed text-oldLace font-titillium font-black text-2xl absolute bottom-14 p-4 border-b border-oldLace"
    >
      <ul class="flex flex-col w-full">
        <li class="nav__item--bottom-border flex-auto" v-for="link in links" :key="link.id">
          <router-link
            class="border-b border-oldLace"
            v-if="link.id === 2 || link.id === 3 || link.id === 4"
            :to="`${link.page}`"
            v-on:click="open"
            >{{ link.emoji }}{{ link.name }}</router-link
          >
        </li>
      </ul>
    </nav>
    <nav class="flex-auto w-2/3">
      <ul class="flex flex-row justify-around">
        <li v-for="link in links" :key="link.id">
          <router-link class="flex-auto" v-if="link.id === 0 || link.id === 1" :to="`${link.page}`"
            >{{ link.emoji }}{{ link.name }}</router-link
          >
        </li>
      </ul>
    </nav>
    <button
      id="menu-btn"
      class="inline-block cursor-pointer flex-auto text-base focus:outline-none focus:ring-0"
      @click="open"
    >
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
        // TODO: Figure out how to add emoji unicode to the objects
        {
          id: 0,
          emoji: '',
          name: 'Home',
          page: '/'
        },
        {
          id: 1,
          emoji: '',
          name: 'Projects',
          page: '/#projects'
        },
        {
          id: 2,
          emoji: '',
          name: 'About Me',
          page: '/#about-me'
        },
        {
          id: 3,
          emoji: '',
          name: 'Achievements',
          page: '/#achievements'
        },
        {
          id: 4,
          emoji: '',
          name: 'Be Social',
          page: '/#be-social'
        }
      ]
    }
  }
}
</script>

<style>
.nav__item--bottom-border {
  border-bottom: 1px solid oldLace;
}
</style>
