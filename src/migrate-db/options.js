import { nephele } from 'src'
import { umzug } from 'src/deps'
import { discover } from 'src/migrate-db/discover'

export const options = params => {
  const sequelize = nephele.modelDb.driver(params.settings)

  return ({
    storage: new umzug.SequelizeStorage({ sequelize, tableName: 'db_migration' }),
    migrations: discover(params.importer),
    context: { sequelize, queryInterface: sequelize.getQueryInterface(), logger: nephele.log }
  })
}
