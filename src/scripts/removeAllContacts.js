import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';
async function removeAllContacts()
{
    try{
        const contacts = '[]';

        await fs.writeFile(PATH_DB, contacts, 'utf8');
    }catch (e) {
        console.error(e);
    }
}

await removeAllContacts();
