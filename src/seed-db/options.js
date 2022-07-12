import { nephele } from 'src'
import { umzug } from 'src/deps'
import { discover } from 'src/seed-db/discover'

export const options = params => {
  const sequelize = nephele.modelDb.driver(params.settings)

  return ({
    storage: umzug.memoryStorage(),
    migrations: discover(params.importer),
    context: { sequelize, queryInterface: sequelize.getQueryInterface(), logger: nephele.log, }
  })
}
