<template>
    <div class="flex justify-center align-center flex-col items-center">
        <img
            src="https://sed-stan-personal-site.s3.amazonaws.com/images/laptop-stickers-1920.png"
            alt="A laptop with stickers on it."
        />
        <div class="container absolute font-titillium text-oldLace pb-12">
            <img
                class="border border-oldLace bg-barnRed rounded-full w-24 md:w-36 lg:w-40 h-auto mx-auto mb-9 mt-10 md:mt-0"
                src="https://sed-stan-personal-site.s3.amazonaws.com/images/head-shot-transparent.png"
                alt="A headshot of a man."
            />
            <h1 class="font-black text-3xl md:text-6xl lg:text-7xl mb-3">
                {{ name }}
            </h1>
            <h2 class="font-bold text-2xl md:text-4xl lg:text-6xl">
                {{ title }}
            </h2>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Hero',
    props: {
        name: String,
        title: String,
    },
}
</script>
