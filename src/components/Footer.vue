<template>
  <footer class="text-oldLace">
    <div class="bg-barnRed">
      <MobileNav />
    </div>
    <div class="bg-bistro">
      <p>&copy; Sedky Stanley Said {{ year }} - All Rights Reserved.</p>
    </div>
  </footer>
</template>

<script>
import MobileNav from '@/components/MobileNav'

const today = new Date()
const year = today.getFullYear()

export default {
  name: 'Footer',
  components: { MobileNav },

  data: function () {
    return {
      year: year
    }
  }
}
</script>

<style></style>
