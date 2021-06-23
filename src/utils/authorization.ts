import { ApolloClient, HttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import config from '../config';

type Client = ApolloClient<unknown>;

function setAuthorization(client: Client, token?: string) {
  client.setLink(
    setContext((_, { headers }) => {
      const newHeader = {
        headers: {
          ...headers,
          Authorization: token ? `Bearer ${token}` : null,
        },
      };
      if (!token) delete newHeader.headers.Authorization;
      return newHeader;
    }).concat(new HttpLink({ uri: config.GRAPHQL_URI })),
  );
}

export function setAuthorizationToken(client: Client, token: string): void {
  setAuthorization(client, token);
}

export function unsetAuthorizationToken(client: Client): void {
  setAuthorization(client);
}
