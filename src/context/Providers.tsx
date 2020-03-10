import React from 'react';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from '@apollo/react-hooks';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import AuthProvider from './AuthProvider';
import { Routes } from '../Routes';

const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://nice-cop.kevinmanssat.fr/graphql' }),
  cache: new InMemoryCache(),
});

export function Providers() {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ApolloProvider>
  );
}
