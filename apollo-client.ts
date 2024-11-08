import { ApolloClient, InMemoryCache, createHttpLink, split } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { getMainDefinition } from '@apollo/client/utilities'
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import { createClient } from 'graphql-ws'

const httpLink = createHttpLink({
  uri: 'https://inctagram.work/api/v1/graphql',
})

const wsLink = new GraphQLWsLink(
  createClient({
    url: 'wss://inctagram.work/api/v1/graphql',
  })
)

const getCredentials = () => {
  const username = ''
  const password = ''

  return username && password ? btoa(`${username}:${password}`) : null
}

const authLink = setContext((_, { headers, token }) => {
  // get the authentication token from local storage if it exists
  const authToken = getCredentials()

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: authToken ? `Basic ${authToken}` : '',
    },
  }
})

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query)

    return definition.kind === 'OperationDefinition' && definition.operation === 'subscription'
  },
  wsLink,
  authLink.concat(httpLink)
)

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: splitLink,
})

export default client
