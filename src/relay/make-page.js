import { lodash } from 'src/deps'

const makeEdge = entity => ({
  node: entity,
  cursor: entity.id,
})

const makePageInfo = entities => ({
  startCursor: lodash.get(lodash.first(entities), 'id', null),
  endCursor: lodash.get(lodash.last(entities), `id`, null)
})

export const makePage = entities => {
  const edges = entities.map(makeEdge)
  const pageInfo = makePageInfo(entities)

  return { edges, pageInfo }
}
