import Vue from 'vue'
import 'es6-promise/auto';
import axios from 'axios'
import VueAxios from 'vue-axios'
//import App from './App-benifits-only.vue'
import App from './App.vue'

//apollo and graphql
// import { createProvider } from 'vue-apollo';
// import { ApolloClient } from 'apollo-client';
// import { HttpLink } from 'apollo-link-http';
// import { InMemoryCache } from 'apollo-cache-inmemory';
// import { createHttpLink } from 'apollo-link-http'
//
// import VueApollo from 'vue-apollo';
//
//
// const httpLink = createHttpLink({
//   //link to GraphQL
//   uri: 'https://api.wildtangent.com/products-graphql/v1/graphql'
// });
//
// const cache = new InMemoryCache();
//
// const apolloClient = new ApolloClient({
//   link: httpLink,
//   cache: cache,
//   connectToDevTools: true
// });


// Vue.use(VueAxios, axios, VueApollo);
Vue.use(VueAxios, axios);

// const apolloProvider = new VueApollo({
//   defaultClient: apolloClient
// });

new Vue({
  el: '#app',
  //apolloProvider,
  render: h => h(App)
})
