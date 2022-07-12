import { winston } from 'src/deps'

let logger = null

export const setupLogger = () => {
  logger = winston.createLogger({
    transports: [
      new winston.transports.Console(),
    ]
  })
}

export const log = {
  info: (message, payload = {}) => logger?.info({ message, payload }),
  debug: (message, payload = {}) => logger?.info({ message, payload }),
  warn: (message, payload = {}) => logger?.warn({ message, payload }),
  error: (message, payload = {}) => logger?.error({ message, payload }),
}
