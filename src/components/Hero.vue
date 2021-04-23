<template>
  <div class="flex justify-center align-center flex-row">
    <img class="relative" src="https://sed-stan-personal-site.s3.amazonaws.com/images/laptop-stickers-1920.png" />
    <div class="container font-titillium absolute">
      <h1 class="font-black">{{ name }}</h1>
      <h2 class="font-bold">{{ title }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    name: String,
    title: String
  }
}
</script>
