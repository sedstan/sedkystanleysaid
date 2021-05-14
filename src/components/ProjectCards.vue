<template>
    <div v-for="repo in repos" :key="repo.node" class="">
        <app-link isExternal :to="`${repo.node.url}`">
            <article
                class="relative flex flex-col flex-auto justify-start items-start flex-wrap bg-cultured p-5 border border-solid rounded border-barnRed mx-1 min-w-full w-80 h-auto"
            >
                <header>
                    <h3
                        class="text-3xl md:2xl sm:xl font-titillium text-barnRed"
                    >
                        {{ repo.node.name }}
                    </h3>
                </header>
                <main class="relative flex flex-col justify-start items-start flex-wrap">
                    <p class="font-roboto">{{ repo.node.description }}</p>
                    <div>
                        <h4
                            class="text-2xl md:text-xl sm:text-lg font-titillium"
                        >
                            Languages:
                        </h4>
                        <p
                            v-for="language in repo.node.languages.edges"
                            :key="language.node"
                            class="font-roboto flex flex-col justify-start items-start"
                        >
                            <span
                                :style="{ color: `${language.node.color}` }"
                                >{{ language.node.name }}</span
                            >
                        </p>
                    </div>
                    <div class="flex flex-col justify-start items-start">
                        <h4
                            class="text-2xl md:text-xl sm:text-lg font-titillium"
                        >
                            Primary Language:
                        </h4>
                        <p class="font-roboto">
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
