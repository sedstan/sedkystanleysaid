<template>
  <footer class="font-roboto font-black text-oldLace w-full h-17 bg-bistro flex items-center justify-center">
    <p class="p-3">&copy; Sedky Stanley Said {{ year }} - All Rights Reserved.</p>
  </footer>
</template>

<script>
const today = new Date()
const year = today.getFullYear()

export default {
  name: 'Footer',
  components: {},

  data: function () {
    return {
      year: year
    }
  }
}
</script>

<style></style>
