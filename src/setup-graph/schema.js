import { nephele } from 'src'
import { ramda } from 'src/deps'

const collectProjectSchema = importer => importer?.keys()
  .map(importer)
  .map(module => module?.default)
  .reduce(ramda.concat, ``)

const collect = importer => `
${nephele.relay.schema()}
${collectProjectSchema(importer)}
`

export const schema = { collect }
