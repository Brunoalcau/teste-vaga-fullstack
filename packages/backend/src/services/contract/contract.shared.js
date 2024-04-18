export const contractPath = 'contract'

export const contractMethods = ['find', 'get', 'create', 'patch', 'remove']

export const contractClient = (client) => {
  const connection = client.get('connection')

  client.use(contractPath, connection.service(contractPath), {
    methods: contractMethods
  })
}
