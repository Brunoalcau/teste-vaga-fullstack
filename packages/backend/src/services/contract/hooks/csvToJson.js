import parseCSV from "../../../utils/parseCSV.js";

const csvToJson =  async (context) => {
    const contract = await parseCSV(context.params.file.path);
    context.data = {
      ...context.data,
      contract
    }
}

export default csvToJson;

  