import { nephele } from 'src'
import { express, cors } from 'src/deps'
import { logging } from 'src/setup-rest/logging'

const DEFAULT_CONFIGS = Object.freeze({
  port: 5000,
  routes: { setup: () => null },
})

export const setupRest = (configs = DEFAULT_CONFIGS) => () => {
  const server = express()

  server.use(logging.middleware())
  server.use(express.json())
  server.use(cors())

  configs.routes.setup(server)

  server.listen(configs.port, () => nephele.log.info(`Rest server is listening on 0.0.0.0:${configs.port}...`))
}
