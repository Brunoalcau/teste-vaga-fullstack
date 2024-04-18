// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { ObjectIdSchema, Type, getValidator, querySyntax } from '@feathersjs/typebox'
import { dataValidator, queryValidator } from '../../validators.js'

// Main data model schema
export const contractSchema = Type.Object(
  {
    _id: ObjectIdSchema(),
    nrInst: Type.String(),
    nrAgencia: Type.String(),
    cdClient: Type.String(),
    nmClient: Type.String(),
    nrCpfCnpj: Type.String(),
    nrContrato: Type.String(),
    dtContrato: Type.String(),
    qtPrestacoes: Type.String(),
    vlTotal: Type.String(),
    cdProduto: Type.String(),
    dsProduto: Type.String(),
    cdCarteira: Type.String(),
    dsCarteira: Type.String(),
    nrProposta: Type.String(),
    nrPresta: Type.String(),
    tpPresta: Type.String(),
    nrSeqPre: Type.String(),
    dtVctPre: Type.String(),
    vlPresta: Type.String(),
    vlMora: Type.String(),
    vlMulta: Type.String(),
    vlOutAcr: Type.String(),
    vlIof: Type.String(),
    vlDescon: Type.String(),
    vlAtual: Type.String(),
    idSituac: Type.String(),
    idSitVen: Type.String(),
  },
  { $id: 'Contract', additionalProperties: false }
)
export const contractValidator = getValidator(contractSchema, dataValidator)
export const contractResolver = resolve({})

export const contractExternalResolver = resolve({})

// Schema for creating new entries
export const contractDataSchema = Type.Pick(contractSchema, ['nrInst', 'nrAgencia', 'cdClient', 'nmClient', 'nrCpfCnpj', 'nrContrato', 'dtContrato', 'qtPrestacoes', 'vlTotal', 'cdProduto', 'dsProduto', 'cdCarteira', 'dsCarteira', 'nrProposta', 'nrPresta', 'tpPresta', 'nrSeqPre', 'dtVctPre', 'vlPresta', 'vlMora', 'vlMulta', 'vlOutAcr', 'vlIof', 'vlDescon', 'vlAtual', 'idSituac', 'idSitVen']
, {
  $id: 'ContractData'
})
export const contractDataValidator = getValidator(contractDataSchema, dataValidator)
export const contractDataResolver = resolve({})

// Schema for updating existing entries
export const contractPatchSchema = Type.Partial(contractSchema, {
  $id: 'ContractPatch'
})
export const contractPatchValidator = getValidator(contractPatchSchema, dataValidator)
export const contractPatchResolver = resolve({})

// Schema for allowed query properties
export const contractQueryProperties = Type.Pick(contractSchema, ['_id', 'nrInst', 'nrAgencia', 'cdClient', 'nmClient', 'nrCpfCnpj', 'nrContrato', 'dtContrato', 'qtPrestacoes', 'vlTotal', 'cdProduto', 'dsProduto', 'cdCarteira', 'dsCarteira', 'nrProposta', 'nrPresta', 'tpPresta', 'nrSeqPre', 'dtVctPre', 'vlPresta', 'vlMora', 'vlMulta', 'vlOutAcr', 'vlIof', 'vlDescon', 'vlAtual', 'idSituac', 'idSitVen'])
export const contractQuerySchema = Type.Intersect(
  [
    querySyntax(contractQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export const contractQueryValidator = getValidator(contractQuerySchema, queryValidator)
export const contractQueryResolver = resolve({})
