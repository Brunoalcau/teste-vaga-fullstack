import { validarCPFCNPJ } from "../../../utils/validarCPFCNPJ.js";


const validationContract = async (context) => {
    const contract = context.data.contract.filter(item => validarCPFCNPJ(item.nrCpfCnpj))
    context.data = {
        ...context.data,
        contract
    }
}


export default validationContract;

