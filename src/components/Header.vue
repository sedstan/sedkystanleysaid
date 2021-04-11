<template>
  <header class="bg-barnRed text-oldLace hidden lg:flex h-24">
    <!-- TODO: Create a div with a logo. Make sure that the logo is source from AWS. Don't forget <router-link></router-link> -->
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
