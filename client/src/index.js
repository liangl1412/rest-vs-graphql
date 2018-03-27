import React from 'react';
import { render } from 'react-dom'
import Blog from './blog'
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { InMemoryCache } from 'apollo-cache-inmemory';




const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache()
});


render((
    <ApolloProvider client={client}>
        <Blog />
    </ApolloProvider>
), document.getElementById('root'));
