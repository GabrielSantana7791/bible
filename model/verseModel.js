import {server, token} from '../etc/api.js';

export async function getVerse(book, chapter, number){
    try{
        const text = await server.get(`/api/verses/nvi/${book}/${chapter}/${number}`,
        {headers: {'Authorization': `Bearer ${token}`}});
   
        return JSON.stringify(text.data.text);

    }catch(error){
        console.log(error.msg)
        return error;
    }
}