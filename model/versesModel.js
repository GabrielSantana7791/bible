import Model from "./model.js";

export default class VersesModel extends Model{
    async run(abbrev, chapter){
        try {        
            const data = await this.server.get(`/api/verses/nvi/${abbrev}/${chapter}`,
                { headers: { 'Authorization': `Bearer ${this.token}` } });
                
            this.contentFilePath = this.path.join(this.__dirname, "..", "/src", "/private", "verses.html");
            this.contentFileText = this.fs.readFileSync(this.contentFilePath, 'utf-8');
    
            let verses = data.data.verses;

            let content = { content: this.contentFileText, verses: verses}
            
            let htmlFile = this.getHtmlFile(content);
            return htmlFile;
    
        } catch (error) {
            console.log(error.msg)
            return error;
        }
    }
}