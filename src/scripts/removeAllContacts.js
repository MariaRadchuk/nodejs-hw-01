import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeAllContacts = async () => {
  try {
    //Reading existing contacts from the file
    const data = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(data);
    // contacts.length = 0; // first variant
    contacts.splice(0, contacts.length); // Second variant

    //Writting updated contacts into file
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
    console.log('The contacts were successfully removed from the file!');
  } catch (error) {
    console.log('An error occurred while removing all contacts: ', error);
  }
};

await removeAllContacts();
