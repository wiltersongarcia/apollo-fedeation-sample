const {ApolloServer} = require('apollo-server');
const {ApolloGateway} = require('@apollo/gateway');

require('dotenv').config();

const gateway = new ApolloGateway();
const server = new ApolloServer({gateway});

server
  .listen()
  .then(({url}) => {
    console.log(`Gateway is ready at ${url}`);
  })
  .catch(err => {
    console.err(err);
  });
