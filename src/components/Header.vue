<template>
  <header
    class="header header--hiden bg-transparent text-oldLace hidden lg:flex lg:w-full lg:fixed lg:shadow-sm z-10"
    :class="{ 'header--hidden': !showHeader }"
  >
    <div class="lg:w-2/12 lg:justify-start">
      <a href="/"
        ><img
          class="header__logo p-3 ml-16"
          src="https://sed-stan-personal-site.s3.amazonaws.com/images/s3-logo-large@2x.png"
          alt="A logo with an S and a 3."
      /></a>
    </div>
    <DesktopNav />
  </header>
</template>

<script>
import DesktopNav from '@/components/DesktopNav'

export default {
  name: 'Header',
  components: { DesktopNav },
  data() {
    return {
      showHeader: true,
      lastScrollPos: 0
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      const currScrollPos = window.pageYOffset || document.documentElement.scrollTop

      if (currScrollPos < 0) {
        return
      }

      if (Math.abs(currScrollPos - this.lastScrollPos) < 112) {
        return
      }

      this.showHeader = currScrollPos < this.lastScrollPos
      this.lastScrollPos = currScrollPos
    }
  }
}
</script>

<style scoped>
.header {
  transform: translate3d(0, 0, 0);
  transition: 0.5s all ease-out;
}
.header--hidden {
  transform: translate3d(0, -100%, 0);
}
.header__logo {
  max-width: 96px;
  height: auto;
}
</style>
