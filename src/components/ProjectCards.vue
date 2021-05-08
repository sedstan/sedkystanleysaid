<template>
    <div>
        <article>
            <header>
                <h4></h4>
            </header>
            <body></body>
            <footer></footer>
        </article>
    </div>
</template>

<script>
import { useQuery } from '@vue/apollo-composable'
import lastTenRepos from '../graphql/repos.query.graphql'

export default {
    name: 'ProjectCards',

    setup() {
        const { result } = useQuery(lastTenRepos)

        return { result }
    },
}
</script>
