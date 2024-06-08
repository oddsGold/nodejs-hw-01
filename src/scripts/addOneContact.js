import fs from 'fs/promises';
import {createFakeContact} from "../utils/createFakeContact.js";
import { PATH_DB } from '../constants/contacts.js';
async function addOneContact()
{
    try{
        const usersData = await fs.readFile(PATH_DB, 'utf8');
        const contacts = JSON.parse(usersData);
        contacts.push(createFakeContact());

        await fs.writeFile(PATH_DB, JSON.stringify(contacts), 'utf8');
    }catch (e) {
        console.error(e);
    }
}

await addOneContact();
