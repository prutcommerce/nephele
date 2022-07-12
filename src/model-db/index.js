import { driver } from 'src/model-db/driver'
import { entities } from 'src/model-db/entities'
import { getEncodedId } from 'src/model-db/get-encoded-id'
import { setEncodedId } from 'src/model-db/set-encoded-id'
import { getIsoString } from 'src/model-db/get-iso-string'

export const modelDb = {
  driver,
  entities,
  getEncodedId,
  setEncodedId,
  getIsoString,
}
