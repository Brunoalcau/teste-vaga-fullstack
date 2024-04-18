
import csv from 'csv-parser';
import fs from 'fs';

const parseCSV = (filePath) => {
    const anotherFile = new URL(`../../${filePath}`, import.meta.url);
    return new Promise((resolve, reject) => {
        const data = [];
        fs.createReadStream(anotherFile.pathname)
        .pipe(csv())
        .on('error', error => reject(error))
        .on('data', row => data.push(row))
        .on('end', () => resolve(data));
    });
}
  


export default  parseCSV;

