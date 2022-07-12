import { nephele } from 'src'
import { lodash } from 'src/deps'

export const setEncodedId = columnName => function (encoded) {
  if (lodash.isNumber(encoded)) return this.setDataValue(columnName, encoded)

  const decoded = nephele.transformId.decode(encoded)
  this.setDataValue(columnName, decoded.id)
}
