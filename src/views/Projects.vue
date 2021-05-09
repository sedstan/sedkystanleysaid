<template>
    <section id="#projects" class="bg-copper">
        <h2
            class="font-titillium font-black text-oldLace text-2xl md:text-4xl lg:text-6xl mb-5"
        >
            Projects
        </h2>
        <div class="relative flex flex-row justify-evenly items-center">
            <ProjectCards />
        </div>
    </section>
</template>

<script>
import ProjectCards from '@/components/ProjectCards.vue'

export default {
    name: 'Projects',
    components: {
        ProjectCards,
    },
}
</script>

<style></style>
