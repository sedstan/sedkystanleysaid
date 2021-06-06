<template>
    <footer
        class="font-roboto font-black text-oldLace text-sm w-full h-17 bg-bistro flex items-center justify-center"
    >
        <div class="lg:container">
            <p class="p-3">&copy; 2016 - {{ year }} Sedky Stanley Said</p>
        </div>
    </footer>
</template>

<script>
const today = new Date()
const year = today.getFullYear()

export default {
    name: 'Footer',
    components: {},

    data() {
        return {
            year,
        }
    },
}
</script>
