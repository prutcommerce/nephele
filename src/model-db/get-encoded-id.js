import { nephele } from 'src'

export const getEncodedId = modelName => function (columnName) {
  return nephele.transformId.encode({
    model: modelName,
    id: this.getDataValue(columnName),
  })
}
