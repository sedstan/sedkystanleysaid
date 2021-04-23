<template>
  <div class="flex justify-center align-center flex-col items-center">
    <img src="https://sed-stan-personal-site.s3.amazonaws.com/images/laptop-stickers-1920.png" />
    <div class="container absolute font-titillium text-oldLace pb-12">
      <img
        class="border border-barnRed rounded-full w-36 h-36 mx-auto mb-9"
        src="https://sed-stan-personal-site.s3.amazonaws.com/images/head-shot-transparent.png"
      />
      <h1 class="font-black text-3xl md:text-6xl lg:text-7xl mb-3">{{ name }}</h1>
      <h2 class="font-bold text-2xl md:text-4xl lg:text-6">{{ title }}</h2>
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
