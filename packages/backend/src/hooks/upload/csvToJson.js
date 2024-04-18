import fs from 'fs';

const  FILE = `/Users/brunoalves/project/teste-vaga-fullstack/data.csv`


export const csvToJson = () =>  (context)  => {

    fs.createReadStream(`${FILE}/`);

} 