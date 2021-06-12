import { createApp, provide, h } from 'vue'
import {
    ApolloClient,
    InMemoryCache,
    createHttpLink,
} from '@apollo/client'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { setContext } from '@apollo/client/link/context'
import App from './App.vue'
import router from './router'
import './assets/styles/index.css'

const httpLink = createHttpLink({
    uri: 'https://api.github.com/graphql',
})

const authLink = setContext((_, { headers }) => {
    const token = process.env.VUE_APP_SEDKYSTANLEYSAID_GITHUB_TOKEN
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        },
    }
})

const defaultClient = new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink),
})

createApp({
    setup() {
        provide(DefaultApolloClient, defaultClient)
    },
    render() {
        return h(App)
    },
})
    .use(router)
    .use(router)
    .mount('#app')
