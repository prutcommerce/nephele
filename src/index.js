import { ENV } from 'src/env'
import { relay } from 'src/relay'
import { seedDb } from 'src/seed-db'
import { modelDb } from 'src/model-db'
import { createDb } from 'src/create-db'
import { setupMaps } from 'src/setup-maps'
import { migrateDb } from 'src/migrate-db'
import { setupRest } from 'src/setup-rest'
import { setupGraph } from 'src/setup-graph'
import { transformId } from 'src/transform-id'
import { setupConnect } from 'src/setup-connect'
import { setupLogger, log } from 'src/setup-logger'
import { setupValidation } from 'src/setup-validation'

export const nephele = {
  ENV,
  transformId,
  relay,
  createDb,
  modelDb,
  migrateDb,
  seedDb,
  setupRest,
  setupGraph,
  setupMaps,
  setupConnect,
  setupValidation,
  setupLogger,
  log,
}
