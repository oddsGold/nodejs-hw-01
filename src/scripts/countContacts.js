import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';
async function countContacts()
{
    try{
        const usersData = await fs.readFile(PATH_DB, 'utf8');
        const length= Object.keys(JSON.parse(usersData)).length;
        console.log(length);
        return length;
    }catch (e) {
        console.error(e);
    }
}

await countContacts();
