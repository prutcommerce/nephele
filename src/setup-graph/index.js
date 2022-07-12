import { nephele } from 'src'
import { schema } from 'src/setup-graph/schema'
import { expressGraphql, graphql } from 'src/deps'

const DEFAULT_CONFIGS = Object.freeze({
  importer: require?.context('src', true, /\.graphql$/),
  resolvers: { make: () => ({}) },
})

const customFormatErrorFn = error => {
  nephele.log.error('Graph request failed.', graphql.formatError(error))

  return graphql.formatError(error)
}

export const setupGraph = (configs = DEFAULT_CONFIGS) => expressGraphql.graphqlHTTP({
  schema: graphql.buildSchema(schema.collect(configs.importer)),
  rootValue: configs.resolvers.make(),
  customFormatErrorFn,
})
