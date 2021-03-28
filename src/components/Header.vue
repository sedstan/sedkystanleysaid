<template>
  <header id="header" class="container mx-auto z-10">
    <a href="/"><img src="https://via.placeholder.com/150" alt="A placeholder image for the logo" class="border rounded" /></a>
    <nav id="nav" class="text-black flex flex-row md:justify-between">
      <ul class="hidden">
        <router-link v-for="routes in links" :key="routes.id" :to="`${routes.page}`" class="m-4">{{
          routes.text
        }}</router-link>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Hedear',
  data() {
    return {
      links: [
        {
          id: 0,
          text: 'Projects',
          page: '/#projects'
        },
        {
          id: 1,
          text: 'About Me',
          page: '/#aboutme'
        },
        {
          id: 2,
          text: 'CV/Accomplishments',
          page: '/#social'
        },
        {
          id: 3,
          text: 'Social',
          page: '/#social'
        }
      ]
    }
  }
}
</script>
