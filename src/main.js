import { createApp } from 'vue'
import { ApolloClient, InMemoryCache, gql, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import App from './App.vue'
import router from './router'
import './assets/styles/index.css'

const httpLink = createHttpLink({
    uri: 'https://api.github.com/graphql',
})

const authLink = setContext((_, { headers }) => {
    const token = process.env.VUE_APP_SEDKYSTANLEYSAID_GITHUB_TOKEN;
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : ""
        }
    }
})

const defaultClient = new ApolloClient({
    cache: new InMemoryCache,
    link: authLink.concat(httpLink)
})

const query = gql`
    query {
        viewer {
            name
            bio
            avatarUrl
            email
        }
    }
`
defaultClient.query({
    query
})
    .then(response => console.log(response))

createApp(App).use(router).use(router).mount('#app')
