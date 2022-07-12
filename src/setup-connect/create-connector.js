import { nephele } from 'src'

export const createConnector = ({ name, config, baseUrl }) => nephele.setupConnect.repository
  .configure({ name, config, baseUrl })
  .then(() => nephele.log.info(`Connector '${name}' was successfully configured.`))
  .catch(() => nephele.log.error(`Connector '${name}' failed to be configured.`) || process.exit(1))
