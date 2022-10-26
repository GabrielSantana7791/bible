import Model from "./model.js";

export default class VerseModel extends Model {
    async run(book, chapter, number) {
        try{
            const text = await this.server.get(`/api/verses/nvi/${book}/${chapter}/${number}`,
            {headers: {'Authorization': `Bearer ${this.token}`}});
       
            return text.data.text;
    
        }catch(error){
            console.log(error.msg)
            return error;
        }
    }
}