<template>
{{result.value}}
</template>

<script>
import { watch } from '@vue/composition-api'
import { useQuery } from '@vue/apollo-composable'
import lastTenRepos from '../graphql/repos.query.graphql'

export default {
    name: 'ProjectCards',

    setup() {
        const { result } = useQuery(lastTenRepos)
        
        watch(() => {
            console.log(result);
        })

        return { result }
    },
}
</script>
