// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html

import { hooks as schemaHooks } from '@feathersjs/schema'
import { ContractService, getOptions } from './contract.class.js'
import {
  contractDataResolver,
  contractDataValidator,
  contractExternalResolver,
  contractPatchResolver,
  contractPatchValidator,
  contractQueryResolver,
  contractQueryValidator,
  contractResolver
} from './contract.schema.js'
import { contractMethods, contractPath } from './contract.shared.js'
import convertToMoneyBr from './hooks/convertToMoneyBr.js'
import { formatDateUtil } from './hooks/formatDateUtil.js'

export * from './contract.class.js'
export * from './contract.schema.js'

// A configure function that registers the service and its hooks via `app.configure`
export const contract = (app) => {
  // Register our service on the Feathers application
  app.use(contractPath, new ContractService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: contractMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(contractPath).hooks({
    around: {
      all: [
        schemaHooks.resolveExternal(contractExternalResolver),
        schemaHooks.resolveResult(contractResolver)
      ]
    },
    before: {
      all: [
        schemaHooks.validateQuery(contractQueryValidator),
        schemaHooks.resolveQuery(contractQueryResolver)
      ],
      find: [],
      get: [],
      create: [
        schemaHooks.validateData(contractDataValidator),
        schemaHooks.resolveData(contractDataResolver)
      ],
      patch: [
        schemaHooks.validateData(contractPatchValidator),
        schemaHooks.resolveData(contractPatchResolver)
      ],
      remove: []
    },
    after: {
      all: [],
      find: [formatDateUtil, convertToMoneyBr]
    },
    error: {
      all: []
    }
  })
}
