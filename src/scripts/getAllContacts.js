import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';
async function getAllContacts()
{
    try{
        const usersData = await fs.readFile(PATH_DB, 'utf8');
        const contacts = JSON.parse(usersData);
        console.log(contacts);
        return contacts;
    }catch (e) {
        console.error(e);
    }
}

await getAllContacts();
