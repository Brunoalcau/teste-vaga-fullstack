import convertMoney from "../../../utils/convertMoney.js";

const convertToMoneyBr = (context) => {
    context.result = {
        ...context.result,
        data: context.result.data.map((item) => ({
            ...item,
            vlTotal: convertMoney(item.vlTotal),
            vlPresta: convertMoney(item.vlPresta),
            vlMora: convertMoney(item.vlMora),
            vlAtual: convertMoney(item.vlAtual),
            vlMulta: convertMoney(item.vlMulta),
        }))
    }
}

export default convertToMoneyBr;