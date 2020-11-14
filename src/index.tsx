import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

import 'src/assets/css/main.css';
import Layout from 'src/components/Layout';
import SquadBuilder from 'src/features/squad-builder';

const client = new ApolloClient({
  uri: process.env.REACT_APP_POKE_ENDPOINT,
  cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Layout>
        <SquadBuilder />
      </Layout>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
