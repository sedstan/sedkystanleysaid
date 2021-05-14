<template>
    <div v-for="repo in repos" :key="repo.node" class="">
        <app-link isExternal :to="`${repo.node.url}`">
            <article class="relative flex flex-col justify-center items-center flex-wrap">
                <header>
                    <h3>{{ repo.node.name }}</h3>
                </header>
                <main>
                    <p>{{ repo.node.description }}</p>
                    <div>
                        <h4>Languages:</h4>
                        <p
                            v-for="language in repo.node.languages.edges"
                            :key="language.node"
                        >
                            <span
                                :style="{ color: `${language.node.color}` }"
                                >{{ language.node.name }}</span
                            >
                        </p>
                    </div>
                    <div class="hidden">
                        <h4>Primary Language:</h4>
                        <p>
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
