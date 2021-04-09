<template>
  <div class="lg:hidden bg-barnRed text-oldLace font-black fixed w-full h-14 flex flex-row justify-center items-center">
    <nav
      id="full-menu"
      class="hidden w-full bg-barnRed text-oldLace font-titillium font-black text-2xl absolute bottom-14 p-4 border-b border-oldLace"
    >
      <ul class="flex flex-col w-full">
        <li v-for="link in links" :key="link.id" class="flex-auto border-b border-oldLace">
          <router-link v-if="link.id === 2" :to="`${link.page}`" v-on:click="open"
            ><span class="mr-14">&#x1F468;</span>{{ link.name }}</router-link
          >
        </li>
        <li v-for="link in links" :key="link.id" class="flex-auto">
          <router-link v-if="link.id === 3" :to="`${link.page}`" v-on:click="open"
            ><span class="mr-14">&#x1F3C6;</span>{{ link.name }}</router-link
          >
        </li>
        <li v-for="link in links" :key="link.id" class="flex-auto">
          <router-link v-if="link.id === 4" :to="`${link.page}`" v-on:click="open"
            ><span class="mr-14">&#x1F44B;</span>{{ link.name }}</router-link
          >
        </li>
      </ul>
    </nav>
    <nav class="flex-auto w-2/3">
      <ul class="flex flex-row justify-evenly">
        <li v-for="link in links" :key="link.id">
          <router-link class="flex-auto" v-if="link.id === 0" :to="`${link.page}`"
            ><span class="text-xl text-center">&#x1F3E0;</span><br />{{ link.name }}</router-link
          >
        </li>
        <li v-for="link in links" :key="link.id">
          <router-link class="flex-auto" v-if="link.id === 1" :to="`${link.page}`"
            ><span class="text-xl text-center">&#x1F4BB;</span><br />{{ link.name }}</router-link
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
