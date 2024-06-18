import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';

const generateContacts = async (number) => {
  try {
    //Reading existing contacts from the file
    const data = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(data);

    //Generation a new contacts
    const newContacts = [];
    for (let i = 0; i < number; i += 1) {
      newContacts.push(createFakeContact());
    }

    //Added new arr of contacts to the existing contacts
    const updatedContacts = contacts.concat(newContacts);

    //Writting updated contacts into file
    await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2));
    console.log('The data was successfully written to the file!');
  } catch (err) {
    console.log('The error eccurred during the recording of the file: ', err);
  }
};

await generateContacts(5);
