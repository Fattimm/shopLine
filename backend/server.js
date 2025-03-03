require('dotenv').config();
const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

const app = express();
app.use(require('cors')());
app.use(require('helmet')());

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Bienvenue sur ShopLine ! 🚀'
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

async function startServer() {
  await server.start();
  server.applyMiddleware({ app });
  app.listen(4000, () => console.log('🚀 Serveur démarré sur http://localhost:4000/graphql'));
}

startServer();
