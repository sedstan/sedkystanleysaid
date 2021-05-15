<template>
    <section id="#projects" class="bg-copper">
        <div class="container-fluid">
            <h2
                class="font-titillium font-black text-oldLace text-2xl md:text-4xl lg:text-6xl mb-5"
            >
                Projects
            </h2>
            <div class="flex flex-row flex-1 overflow-x-scroll overflow-y-auto pb-10 w-full">
                <ProjectCards />
            </div>
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
