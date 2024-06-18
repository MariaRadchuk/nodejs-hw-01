import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';

export const addOneContact = async () => {
  try {
    //Reading existing contacts from the file
    const data = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(data);

    //added new contact to the arr of contacts
    const newContact = createFakeContact();
    contacts.push(newContact);

    //Writting updated contacts into file
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
    console.log('The one contact was successfully written to the file!');
  } catch (error) {
    console.log('The error eccurred during the recording of the file: ', error);
  }
};

await addOneContact();
