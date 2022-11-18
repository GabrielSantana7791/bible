import Model from "./model.js";

export default class VerseModel extends Model {
    async run(book, chapter, number) {
        try{
            const text = await this.server.get(`/api/verses/nvi/${book}/${chapter}/${number}`,
            {headers: {'Authorization': `Bearer ${this.token}`}});
       
            this.contentFilePath = this.path.join(this.__dirname, "..", "/src", "/private", "verse.html");
            this.contentFileText = this.fs.readFileSync(this.contentFilePath, 'utf-8');

            let verse = text.data.text;

            this.pageTitle = `${text.data.book.name} ${text.data.chapter}:${text.data.number}`

            let content = { pageTitle: this.pageTitle, content: this.contentFileText, verse: verse}

            let htmlFile = this.getHtmlFile(content);        
            return htmlFile;
    
        }catch(error){
            console.log(error)

            let content = { pageTitle: "Erro 404", msg: "", content: this.errorFile };

            let htmlFile = this.getHtmlFile(content); 
            return htmlFile;
        }
    }
}