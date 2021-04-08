<template>
  <div class="lg:hidden bg-barnRed text-oldLace font-black fixed w-full h-14 flex flex-row justify-center items-center">
    <nav id="full-menu" class="hidden w-full bg-barnRed text-oldLace absolute bottom-14 p-4">
      <ul>
        <li v-for="link in links" :key="link.id" class="flex-auto">
          <router-link v-if="link.id === 2" :to="`${link.page}`">{{ link.name }}</router-link>
        </li>
        <li v-for="link in links" :key="link.id" class="flex-auto">
          <router-link v-if="link.id === 3" :to="`${link.page}`">{{ link.name }}</router-link>
        </li>
        <li v-for="link in links" :key="link.id" class="flex-auto">
          <router-link v-if="link.id === 4" :to="`${link.page}`">{{ link.name }}</router-link>
        </li>
      </ul>
    </nav>
    <nav class="flex-auto w-2/3">
      <ul class="flex flex-row justify-evenly">
        <li v-for="link in links" :key="link.id">
          <router-link v-if="link.id === 0" :to="`${link.page}`" class="flex-auto"
            >&#x1F3E0; {{ link.name }}</router-link
          >
        </li>
        <li v-for="link in links" :key="link.id">
          <router-link v-if="link.id === 1" :to="`${link.page}`" class="flex-auto"
            >&#x1F4BB;{{ link.name }}</router-link
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
