import Model from "./model.js";

export default class BookModel extends Model{
    async run(abbrev){
        try {
            const data = await this.server.get(`/api/books/${abbrev}`,
                { headers: { 'Authorization': `Bearer ${this.token}` } });

            this.contentFilePath = this.path.join(this.__dirname, "..", "/src", "/private", "book.html");
            this.contentFileText = this.fs.readFileSync(this.contentFilePath, 'utf-8');
                
            let bookJson = data.data;
            let versesNumberArray = [];
            
            for (let i=0; i < bookJson.chapters; i++) {
                versesNumberArray.push(i+1);
            }

            this.pageTitle = bookJson.name;
            
            let content = { pageTitle: this.pageTitle, content: this.contentFileText, bookJson: bookJson, versesNumber: versesNumberArray };
           
            let htmlFile = this.getHtmlFile(content); 
            return htmlFile;
    
        } catch (error) {
            console.log(error)

            let content = { pageTitle: "Erro 404", msg: "", content: this.errorFile };

            let htmlFile = this.getHtmlFile(content); 
            return htmlFile;
        }
    }
}