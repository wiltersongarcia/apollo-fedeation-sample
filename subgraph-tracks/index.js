const { ApolloServer, gql } = require('apollo-server')
const { readFileSync } = require('fs')
const { buildSubgraphSchema } = require('@apollo/subgraph')

const typeDefs = gql(readFileSync('./tracks.graphql', {encoding: 'utf8'}))
const resolvers = require('./resolvers')
const TracksAPI = require('./datasources/TracksApi')

const server = new ApolloServer({
  schema: buildSubgraphSchema({ typeDefs, resolvers }),
  dataSources: () => {
    return {
      tracksAPI: new TracksAPI(),
    }
  }
})

const port = 8080
const subgraphName = 'tracks'

server
  .listen({ port })
  .then(({ url }) => {
    console.log(`Subgraph ${subgraphName} listening at ${url}`)
  }).catch(err => {
    console.error(err)
  })
