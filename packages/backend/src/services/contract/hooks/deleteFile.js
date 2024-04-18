import fs from 'fs';

const deleteFile = (context) => {
    const anotherFile = new URL(`../../../../${context.params.file.path}`, import.meta.url);
    fs.unlinkSync(anotherFile.pathname)
}

export default deleteFile;