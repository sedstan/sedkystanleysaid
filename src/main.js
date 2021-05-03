import { createApp, provide, h } from 'vue'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { DefaultApolloClient } from '@vue/apollo-composable'
import App from './App.vue'
import router from './router'
import './assets/styles/index.css'

const defaultClient = new ApolloClient({
  url: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    authroization: `Bearer ${process.env.VUE_APP_SEDKYSTANLEYSAID_GITHUB_TOKEN} `,
  },
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
