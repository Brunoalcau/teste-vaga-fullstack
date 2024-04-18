// This is a skeleton for a custom service class. Remove or add the methods you need here
export class UploadService {
  constructor(options) {
    this.options = options
  }

  async find(_params) {
    return []
  }

  async get(id, _params) {
    return {
      id: 0,
      text: `A new message with ID: ${id}!`
    }
  }

  async create(data, params) {
    const contractService = this.options.service("contract")
    const consul = await Promise.all(data.contract.map((item) => {
      return  contractService.find({
        query: {
          nrContrato: item.nrContrato,
          nrPresta: item.nrPresta
        }
      })
    }));
    
    const listItemDataBase = consul.map( contract => contract.data).flatMap(contract => contract)
    const listNotCreated = data.contract.reduce((acc, current) => {
      const isExisted = listItemDataBase.find( item => {
         return item.nrContrato === current.nrContrato && item.nrPresta === current.nrPresta
      })
      if(isExisted) {
        return acc
      }
      return [...acc, current]
    }, []);
    

    await Promise.all(listNotCreated.map(item => contractService.create(item)))

    return {
      totalSlantedLines: listNotCreated.length
    }
  }

  // This method has to be added to the 'methods' option to make it available to clients
  async update(id, data, _params) {
    return {
      id: 0,
      ...data
    }
  }

  async patch(id, data, _params) {
    return {
      id: 0,
      text: `Fallback for ${id}`,
      ...data
    }
  }

  async remove(id, _params) {
    return {
      id: 0,
      text: 'removed'
    }
  }
}

export const getOptions = (app) => {
  return { app }
}
