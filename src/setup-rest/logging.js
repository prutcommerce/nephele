import { nephele } from 'src'
import { morgan } from 'src/deps'

const morganStream = () => ({ write: message => nephele.log.info(message?.replace('\n', '')) })

const middleware = () => morgan(':method :url :status :response-time ms', { stream: morganStream() })

export const logging = { middleware }
