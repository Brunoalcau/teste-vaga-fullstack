import { contract } from './contract/contract.js'

import { upload } from './upload/upload.js'

export const services = (app) => {
  app.configure(contract)

  app.configure(upload)

  // All services will be registered here
}
