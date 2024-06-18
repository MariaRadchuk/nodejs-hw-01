import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const countContacts = async () => {
  try {
    //Reading existing contacts from the file
    const data = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(data);
    return contacts.length;
  } catch (error) {
    console.log('An error occurred while counting the contacts: ', error);
  }
};

console.log(await countContacts());
