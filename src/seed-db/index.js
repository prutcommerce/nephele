import { nephele } from 'src'
import { umzug } from 'src/deps'
import { modelDb } from 'src/model-db'
import { options } from 'src/seed-db/options'

const DEFAULT_PARAMS = {
  importer: require?.context('src/seed-db/seeds', true, /\.js$/),
  settings: modelDb.driver.DEFAULT_SETTINGS,
}

export const seedDb = (params = DEFAULT_PARAMS) => async () => {
  const instance = new umzug.Umzug(options(params))

  await instance.up()

  nephele.log.info('Database seeds were successfully applied.')
}
