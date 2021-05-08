<template>
  <section id="projects" class="bg-copper">
    <h2
      class="font-titillium font-black text-oldLace text-2xl md:text-3xl lg:text-4xl"
    >
      Projects
    </h2>
    <ProjectCards />
  </section>
</template>

<script>
import ProjectCards from '@/components/ProjectCards.vue'

export default {
  name: 'Projects',
  components: {
    ProjectCards
  },
}
</script>

<style></style>
