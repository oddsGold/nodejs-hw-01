import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

async function thanos()
{
    try{
        const usersData = await fs.readFile(PATH_DB, 'utf8');
        let contacts = JSON.parse(usersData);

        if (Object.keys(JSON.parse(usersData)).length === 0) return;

        contacts = contacts.filter(contact => Math.random() >= 0.5);

        await fs.writeFile(PATH_DB, JSON.stringify(contacts), 'utf8');

    }catch (e) {
        console.error(e);
    }
}

await thanos();

