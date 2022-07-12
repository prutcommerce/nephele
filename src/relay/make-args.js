import { nephele } from 'src'

export const makeArgs = args => ({
  ...args,
  first: args?.first ?? nephele.relay.defaults.SIZE,
  after: nephele.relay.decodeCursor(args?.after)
})
