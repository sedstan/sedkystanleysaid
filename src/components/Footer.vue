<template>
  <footer class="text-oldLace">
    <div class="bg-bistro">
      <p>&copy; Sedky Stanley Said {{ year }} - All Rights Reserved.</p>
    </div>
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
