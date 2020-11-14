import React from 'react';
import ReactDOM from 'react-dom';
import { OverlayProvider } from 'react-aria';
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
      <OverlayProvider>
        <Layout>
          <SquadBuilder />
        </Layout>
      </OverlayProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
