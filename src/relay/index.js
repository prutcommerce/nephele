import { ramda } from 'src/deps'
import { defaults } from 'src/relay/defaults'
import { makePage } from 'src/relay/make-page'
import { makeArgs } from 'src/relay/make-args'
import { decodeCursor } from 'src/relay/decode-cursor'

const schema = () => {
  const graphImporter = require?.context('src', true, /\.graphql$/)

  return graphImporter?.keys()
    .map(graphImporter)
    .map(module => module?.default)
    .reduce(ramda.concat, ``)
}

export const relay = {
  schema,
  defaults,
  makePage,
  makeArgs,
  decodeCursor,
}
