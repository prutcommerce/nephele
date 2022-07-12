import { ENV } from 'src/env'
import { lodash } from 'src/deps'
import { install } from 'source-map-support'

const DEFAULT_SETTINGS = { getEnv: () => ENV.local }

const DEFAULT_ON = [ENV.local]

export const setupMaps = (settings = DEFAULT_SETTINGS, on = DEFAULT_ON) => {
  if (!lodash.includes(on, settings.getEnv())) return

  install()
}
