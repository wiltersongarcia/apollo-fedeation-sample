const { ApolloServer, gql } = require('apollo-server')
const { readFileSync } = require('fs')
const { buildSubgraphSchema } = require('@apollo/subgraph')

const typeDefs = gql(readFileSync('./reviews.graphql', {encoding: 'utf8'}))
const resolvers = require('./resolvers')
const ReviewsAPI = require('./datasources/ReviewsApi')

const server = new ApolloServer({
  schema: buildSubgraphSchema({ typeDefs, resolvers }),
  dataSources: () => {
    return {
      reviewsAPI: new ReviewsAPI(),
    }
  },
})

const port = 8081
const subgraphName = 'reviews'

server
  .listen({ port })
  .then(({ url }) => {
    console.log(`Subgraph ${subgraphName} listening at ${url}`)
  }).catch(err => {
    console.error(err)
  })
