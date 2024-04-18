import multer from 'multer';
import csvToJson from '../contract/hooks/csvToJson.js';
import deleteFile from '../contract/hooks/deleteFile.js';
import validationContract from '../contract/hooks/validationContract.js';
import { UploadService } from './upload.class.js';
import { uploadPath } from './upload.shared.js';

export * from './upload.class.js';


var uploadMulter = multer({ dest: './public/uploads/' }).single('file')


function convertToDate(dateString) {
  const regex = /^(\d{4})(\d{2})(\d{2})$/;

  const match = regex.exec(dateString);
  if (!match) {
      throw new Error("Formato de data inválido. Use o formato YYYYMMDD.");
  }

  const date = new Date(parseInt(match[1]), parseInt(match[2]) -1, parseInt(match[3]));

  return date.toISOString();
}


function formatDateUtil (context){
  const contract = context.data.contract.map(item => ({
    ...item,
    dtContrato: convertToDate(item.dtContrato),
    dtVctPre: convertToDate(item.dtVctPre)
  }));
  context.data = {
    ...context.data,
    contract
  }
}

export const upload = (app) => {
  app.use(
    uploadPath,
    uploadMulter,
    (req, res, next) => {
      if (req.file && req.feathers && !req.feathers.file) {
        req.feathers.file = req.file
      }else {
        throw new Error("Não Encontramos arquivos em anexo")
      }
      next()
    },
    new UploadService(app)
  )

  app.service(uploadPath).hooks({
    around: {
      all: []
    },
    before: {
      all: [],
      find: [],
      get: [],
      create: [csvToJson, validationContract, deleteFile],
      // create: [csvToJson, validationContract, formatDateUtil, convertToMoneyBr],
      patch: [],
      remove: []
    },
    after: {
      all: []
    },
    error: {
      all: []
    }
  })
}
