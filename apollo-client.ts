import { loadFromLocalStorage } from '@/shared/lib/helpers'
import { ApolloClient, createHttpLink, InMemoryCache, split } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { getMainDefinition } from '@apollo/client/utilities'
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import { WebSocketLink } from '@apollo/client/link/ws'
import { SubscriptionClient } from 'subscriptions-transport-ws'

const httpLink = createHttpLink({
  uri: 'https://inctagram.work/api/v1/graphql',
})

const wsLink = new WebSocketLink(new SubscriptionClient('wss://inctagram.work/api/v1/graphql'))

const getCredentials = () => {
  const username = loadFromLocalStorage('username', '')
  const password = loadFromLocalStorage('password', '')

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
  authLink.concat(wsLink),
  authLink.concat(httpLink)
)

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: splitLink,
})

export default client
