import { nephele } from 'src'
import { sequelize, mariadb } from 'src/deps'

const DEFAULT_SETTINGS = {
  getDatabaseHost: () => '',
  getDatabasePort: () => 0,
  getDatabaseUri: () => '',
}

const options = settings => ({
  dialect: 'mariadb',
  dialectModule: mariadb,
  dialectOptions: { connectTimeout: 10000 },
  host: settings.getDatabaseHost(),
  port: settings.getDatabasePort(),
  logging: message => nephele.log.debug(message),
  pool: {
    min: 0,
    max: 2,
    idle: 0,
  },
})

let instance = null

export const driver = (settings = DEFAULT_SETTINGS) => {
  if (!instance) instance = new sequelize.Sequelize(settings.getDatabaseUri(), options(settings))

  return instance
}

driver.DEFAULT_SETTINGS = DEFAULT_SETTINGS
