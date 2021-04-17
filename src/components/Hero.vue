<template>
  <div class="container">
    <img
      class="absolute inset-0 top-1/4 md:top-20 sm:top-20 z-10 w-44 h-44 border border-barnRed rounded-full bg-oldLace flex flex-row justify-center mx-auto"
      src="https://sed-stan-personal-site.s3.amazonaws.com/images/head-shot-transparent.png"
    />
    <div
      class="absolute inset-0 top-0 md:-top-80 sm:-top-80 mt-10 z-10 w-full h-auto flex flex-col justify-center items-center font-titillium text-2xl md:text-3xl lg:text-4xl xl:text-6xl text-oldLace"
    >
      <h1 class="font-black">{{ name }}</h1>
      <h2 class="font-bold">{{ title }}</h2>
    </div>
  </div>
  <img
    class="relative"
    src="https://sed-stan-personal-site.s3.amazonaws.com/images/laptop-stickers-1920.png"
    alt="a laptop with
    stickers on it"
  />
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
