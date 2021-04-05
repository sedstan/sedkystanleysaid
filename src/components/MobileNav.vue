<template>
  <div class="lg:hidden bg-barnRed text-oldLace fixed w-full h-14 flex flex-row justify-center items-center">
    <div class="full-menu-btn flex-1 relative flex justify-center cursor-pointer transition duration-75 ease-in-out">
      <div class="full-menu-btn__burger w-5 h-1 bg-oldLace"></div>
    </div>
    <nav class="flex-auto">
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
    <nav class="hidden">
      <ul>
        <li v-for="link in links" :key="link.id" class="flex-auto">
          <router-link :to="`${link.page}`">{{ link.name }}</router-link>
        </li>
      </ul>
    </nav>
  </div>
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
