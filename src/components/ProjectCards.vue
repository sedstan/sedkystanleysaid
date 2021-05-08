<template>
    <div v-for="repo in repos" :key="repo.node">
        <article>
            <h3>{{ repo.node.name }}</h3>
            <p>{{ repo.node.description }}</p>
        </article>
    </div>
</template>

<script>
import { useQuery, useResult } from '@vue/apollo-composable'
import lastTenRepos from '../graphql/repos.query.graphql'

export default {
    name: 'ProjectCards',

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
