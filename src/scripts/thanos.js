import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const thanos = async () => {
  try {
    //Reading existing contacts from the file
    const data = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(data);

    //Filtered and removed contacts with a 50% probability
    const filteredContacts = contacts.filter(() => Math.random() > 0.5); // Can be second variant through the cycle for

    //Writting updated contacts into file
    await fs.writeFile(PATH_DB, JSON.stringify(filteredContacts, null, 2));

    console.log(
      'The contacts were successfully filtered and removed with a 50% probability from the file!',
    );
  } catch (error) {
    console.log(
      'An error occurred while removing 50% from all contacts: ',
      error,
    );
  }
};

await thanos();
