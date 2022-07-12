import { nephele } from 'src'
import { dbMigration } from 'src/model-db/db-migration'

export const entities = (settings = nephele.modelDb.driver.DEFAULT_SETTINGS) => {
  const driver = nephele.modelDb.driver(settings)

  return {
    driver,
    dbMigration: dbMigration(driver),
  }
}
