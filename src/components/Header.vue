<template>
  <header class="bg-transparent text-oldLace hidden lg:container lg:flex w-full h-24 mt-12">
    <div class="lg:w-2/12 lg:justify-start">
      <img
        class="header__logo"
        src="https://sed-stan-personal-site.s3.amazonaws.com/images/s3-logo-large@2x.png"
        alt="A logo with an S and a 3."
      />
    </div>
    <DesktopNav />
  </header>
</template>

<script>
import DesktopNav from '@/components/DesktopNav'

export default {
  name: 'Header',
  components: { DesktopNav }
}
</script>

<style>
.header__logo {
  max-width: 96px;
  height: auto;
}
</style>
