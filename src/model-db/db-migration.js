import { sequelize } from 'src/deps'

export const dbMigration = driver => driver.define('migration', {
  name: sequelize.DataTypes.STRING,
}, {
  underscored: true,
  tableName: 'db_migration',
})
