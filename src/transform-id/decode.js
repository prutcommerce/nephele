import { lodash } from 'src/deps'

export const decode = encoded => {
  const asString = Buffer.from(encoded, 'base64').toString()
  const divided = asString.split(':')
  const valueAsString = lodash.last(divided)

  return { model: lodash.first(divided), id: parseInt(valueAsString) }
}
