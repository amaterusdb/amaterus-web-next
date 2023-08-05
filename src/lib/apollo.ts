import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from "@apollo/client"

const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: process.env.NEXT_PUBLIC_AMATERUS_HASURA_GRAPHQL_ENDPOINT,
    }),
    cache: new InMemoryCache(),
  })
 }
