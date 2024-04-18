function convertToDate(dateString) {
    const regex = /^(\d{4})(\d{2})(\d{2})$/;
  
    const match = regex.exec(dateString);
    if (!match) {
        throw new Error("Formato de data inválido. Use o formato YYYYMMDD.");
    }
  
    const date = new Date(parseInt(match[1]), parseInt(match[2]) -1, parseInt(match[3]));
  
    return date.toISOString();
}

export const formatDateUtil = (context) => {
    context.result = {
        ...context.result,
        data: context.result.data.map((item) => ({
            ...item,
            dtContrato: convertToDate(item.dtContrato),
            dtVctPre: convertToDate(item.dtVctPre)
        }))
    }
}