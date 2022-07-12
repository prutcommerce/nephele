import { nephele } from 'src'
import { umzug } from 'src/deps'
import { modelDb } from 'src/model-db'
import { options } from 'src/migrate-db/options'

const DEFAULT_PARAMS = {
  importer: require?.context('src/migrate-db/migrations', true, /\.js$/),
  settings: modelDb.driver.DEFAULT_SETTINGS,
}

export const migrateDb = (params = DEFAULT_PARAMS) => async () => {
  const instance = new umzug.Umzug(options(params))

  await instance.up()

  nephele.log.info('Database migrations were successfully applied.')
}
