<template>
  <footer class="bg-bistro text-cultured">
    <div>
      <!-- TODO: MobileNav -->
    </div>
    <div>
      <p>&copy; Sedky Stanley Said {{ year }} - All Rights Reserved.</p>
    </div>
  </footer>
</template>

<script>
const today = new Date()
const year = today.getFullYear()

export default {
  name: 'Footer',
  data: function () {
    return {
      year: year
    }
  }
}
</script>

<style></style>
