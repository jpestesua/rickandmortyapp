import {ApolloClient, ApolloLink} from '@apollo/client';
import {createHttpLink} from './utils/link';
import {localCache} from './utils/cache';
import {errorLink} from './utils/errors';

export function createApolloClient() {
  const httpLink = createHttpLink();

  const apolloClient = new ApolloClient({
    link: ApolloLink.from([errorLink, httpLink]),
    connectToDevTools: true,
    cache: localCache,
    assumeImmutableResults: true,
  });

  return apolloClient;
}
