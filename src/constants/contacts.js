import path from 'node:path';

//Get the current work catalogue
const pathToWorkDir = path.join(process.cwd());

//A variable is declared that stores the path to the file src/db/db.jso
export const PATH_DB = path.join(pathToWorkDir, 'src', 'db', 'db.json');
