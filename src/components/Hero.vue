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
            <ul class="container flex justify-center items-center mt-12">
                <li class="mr-3 bg-barnRed bg-opacity-50">
                    <a
                        href="https://github.com/sedstan"
                        referrerpolicy="no-referrer"
                        rel="external"
                        target="_blank"
                        ><img
                            class="inline-block"
                            src="https://sed-stan-personal-site.s3.amazonaws.com/images/github-square-brands-f092@2x.png"
                            alt="A GitHub icon."
                        />
                    </a>
                </li>
                <li class="mr-3 bg-barnRed bg-opacity-50">
                    <a
                        href="https://linkedin.com/in/sstanleysaid"
                        referrerpolicy="no-referrer"
                        rel="external"
                        target="_blank"
                        ><img
                            class="inline-block"
                            src="https://sed-stan-personal-site.s3.amazonaws.com/images/linked-in@2x.png"
                            alt="A LinkedIn icon."
                    /></a>
                </li>
                <li class="mr-3 bg-barnRed bg-opacity-50">
                    <a
                        href="https://twitter.com/sedstanleysaid"
                        referrerpolicy="no-referrer"
                        rel="external"
                        target="_blank"
                        ><img
                            class="inline-block"
                            src="https://sed-stan-personal-site.s3.amazonaws.com/images/twitter-square-brands-f081@2x.png"
                            alt="A Twitter icon."
                    /></a>
                </li>
                <li class="mr-3 bg-barnRed bg-opacity-50">
                    <a
                        href="https://www.facebook.com/sedstanley"
                        referrerpolicy="no-referrer"
                        rel="external"
                        target="_blank"
                        ><img
                            class="inline-block"
                            src="https://sed-stan-personal-site.s3.amazonaws.com/images/facebook.png"
                            alt="A facebook icon"
                    /></a>
                </li>
                <li class="bg-barnRed bg-opacity-30">
                    <a
                        href="https://instagram.com/sedstan"
                        referrerpolicy="no-referrer"
                        rel="external"
                        target="_blank"
                        ><img
                            class="inline-block"
                            src="https://sed-stan-personal-site.s3.amazonaws.com/images/instagram.png"
                            alt="A instagram icon."
                    /></a>
                </li>
            </ul>
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
