<template>
  <div class="lg:hidden bg-barnRed text-oldLace fixed w-full h-14 flex flex-row justify-center items-center">
    <div
      class="group inline-block cursor-pointer"
      @click="open"
      @class="
        {
          active: isActive
        }
      "
    >
      <div class="menu-btn--top w-5 h-1 bg-oldLace my-1 mx-0 transition duration-75"></div>
      <div class="menu-btn--middle w-5 h-1 bg-oldLace my-1 mx-0 transition duration-75"></div>
      <div class="menu-btn--bottom w-5 h-1 bg-oldLace my-1 mx-0 transition duration-75"></div>
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
    <nav id="full-menu" class="hidden">
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
  methods: {
    open: function () {
      this.isActive = !this.isActive
      console.log('active')
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
      ],
      isActive: false
    }
  }
}
</script>

<style>
.active .menu-btn--top {
  transform: rotate(45deg);
}

.active .menu-btn--middle {
  opacity: 0;
}

.active .menu-btn--bottom {
  transform: rotate(-45deg);
}
</style>
