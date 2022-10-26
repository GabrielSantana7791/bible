import Model from "./model.js";

export default class VersesModel extends Model{
    async run(abbrev, chapter){
        try {
            this.indexFile = this.path.join(this.__dirname, "..", "/public", "/verses.html");
        
            const data = await this.server.get(`/api/verses/nvi/${abbrev}/${chapter}`,
                { headers: { 'Authorization': `Bearer ${this.token}` } });
    
            let verses = data.data.verses;
            
            let result = await this.templateEngine.processFile(this.indexFile, { verses: verses});
    
            return result;
    
        } catch (error) {
            console.log(error.msg)
            return error;
        }
    }
}