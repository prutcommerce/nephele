import { mariadb } from 'src/deps'

const makeConnectionPool = async settings => mariadb.createConnection({
  user: settings.getDatabaseUsername(),
  password: settings.getDatabasePassword(),
  host: settings.getDatabaseHost(),
  port: settings.getDatabasePort()
})

export const createDb = async settings => {
  const connection = await makeConnectionPool(settings)
  await connection.execute(`CREATE DATABASE IF NOT EXISTS ${settings.getDatabaseName()};`)
  await connection.end()
}
