<template>
    <div
        v-for="repo in repos"
        :key="repo.node"
        class="relative mr-1 pt-5 pb-5 md:w-min"
    >
        <app-link isExternal :to="`${repo.node.url}`">
            <article
                class="relative flex flex-col flex-auto justify-start items-start flex-wrap bg-cultured p-5 border border-solid rounded mx-1 text-left min-w-full w-100 min-h-full h-100 md:min-w-0 group"
            >
                <header class="mb-4 border-b border-barnRed w-full">
                    <h3
                        class="text-3xl md:2xl sm:xl font-titillium text-barnRed"
                    >
                        {{ repo.node.name }}
                    </h3>
                </header>
                <main
                    class="flex flex-col justify-start items-start align-left"
                >
                    <p class="font-roboto text-bistro mb-4">
                        {{ repo.node.description }}
                    </p>
                    <div class="group-hover:hidden">
                        <h4
                            class="text-2xl md:text-xl sm:text-lg font-titillium text-barnRed"
                        >
                            Languages:
                        </h4>
                        <p
                            v-for="language in repo.node.languages.edges"
                            :key="language.node"
                            class="font-roboto flex flex-col justify-start items-start text-bistro"
                        >
                            <span
                                :style="{ color: `${language.node.color}` }"
                                >{{ language.node.name }}</span
                            >
                        </p>
                    </div>
                    <div
                        class="hidden group-hover:flex flex-col justify-start items-start">
                        <h4
                            class="text-2xl md:text-xl sm:text-lg font-titillium text-barnRed"
                        >
                            Primary Language:
                        </h4>
                        <p class="font-robot text-bistro">
                            <span
                                :style="{
                                    color: `${repo.node.primaryLanguage.color}`,
                                }"
                                >{{ repo.node.primaryLanguage.name }}</span
                            >
                        </p>
                    </div>
                </main>
            </article>
        </app-link>
    </div>
</template>

<script>
import { useQuery, useResult } from '@vue/apollo-composable'
import lastTenRepos from '../graphql/repos.query.graphql'
import AppLink from './AppLink.vue'

export default {
    name: 'ProjectCards',
    components: { AppLink },
    setup() {
        const { result } = useQuery(lastTenRepos)
        const repos = useResult(
            result,
            null,
            (data) => data.viewer.repositories.edges
        )

        return { repos }
    },
}
</script>
