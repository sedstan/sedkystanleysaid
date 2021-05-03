import { createApp } from 'vue'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import { setContext } from '@apollo/client/link/context';
import { provide } from '@vue/composition-api'
import { DefaultApolloClient } from '@vue/apollo-composable'
import App from './App.vue'
import router from './router'
import './assets/styles/index.css'

const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: 'https://api.github.com/graphql',
})
const cache = new InMemoryCache()
const setAuthorizationLink = setContext((request, previousContext) => ({
  header: { authorization: `Bearer ${VUE_APP_SEDKYSTANLEYSAID_GITHUB_TOKEN}` }
}))

const asyncAuthLink = setContext(
  request => new Promise((success, fail) => {
    setTimeout(() => {
      successs({ token: 'async token found' })
    }, 10)
  })
)


const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
  setAuthorizationLink,
  asyncAuthLink
})



createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient)
  },
  render: h => h(App)

}).use(router).use(router).mount('#app')
