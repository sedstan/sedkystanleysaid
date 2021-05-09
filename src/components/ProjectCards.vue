<template>
    <div v-for="repo in repos" :key="repo.node" class="w-full relative flex flex-col items-stretch h-full">
        <app-link isExternal :to="`${repo.node.url}`">
            <article>
                <h3>{{ repo.node.name }}</h3>
                <p>{{ repo.node.description }}</p>
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
