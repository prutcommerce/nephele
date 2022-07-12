import { nephele } from 'src'

const DEFAULT_CURSOR = Buffer.from('unknown:0').toString('base64')

export const decodeCursor = encoded => {
  encoded = encoded ?? DEFAULT_CURSOR

  return nephele.transformId.decode(encoded).id
}
