import { moment } from 'src/deps'

export const getIsoString = () => function (columnName) {
  const data = this.getDataValue(columnName)

  return moment(data).toISOString()
}
