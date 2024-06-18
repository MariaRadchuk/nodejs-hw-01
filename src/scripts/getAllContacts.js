import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const getAllContacts = async () => {
  try {
    //Reading existing contacts from the file
    const data = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(data);
    return contacts;
  } catch (error) {
    console.log(
      'The error eccurred during the return arr of contacts from the file: ',
      error,
    );
  }
};

console.log(await getAllContacts());
