<template>
    <div v-for="repo in repos" :key="repo.node">
        <a
            href="{{repo.node.url}}"
            hreflang="en"
            referrerpolicy="no-referrer"
            rel="external"
            target="_blank"
            ><article>
                <h3>{{ repo.node.name }}</h3>
                <p>{{ repo.node.description }}</p>
            </article></a
        >
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
