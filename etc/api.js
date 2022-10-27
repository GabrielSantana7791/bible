import axios from 'axios';
import fs from 'fs'
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const tokenDiv =  path.join(__dirname, 'token.txt');

if(!fs.existsSync(tokenDiv)){
    fs.writeFileSync(path.join(__dirname, 'token.txt'), 'first', 'utf-8');
}

export let token = fs.readFileSync(tokenDiv, 'utf-8', (error, data)=>{
    if(error){
        console.log(`api.js: ${error}`);
    }
    return data;
});

export const server = axios.create({baseURL: 'https://www.abibliadigital.com.br'});