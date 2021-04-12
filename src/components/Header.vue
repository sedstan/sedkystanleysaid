<template>
  <header class="bg-transparent text-oldLace hidden lg:container lg:flex w-full h-24">
    <!-- TODO: Create a div with a logo. Make sure that the logo is source from AWS. Don't forget <router-link></router-link> -->
    <div class="lg:w-2/12 lg:justify-start">
      <!-- TODO: LOGO HERE  -->
      <img src="https://via.placeholder.com/96" alt="A gray placeholder image with the dimension written on it." />
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

<style></style>
