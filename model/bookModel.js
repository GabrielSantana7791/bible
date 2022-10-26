import Model from "./model.js";

export default class BookModel extends Model{
    async run(abbrev){
        try {
            const data = await this.server.get(`/api/books/${abbrev}`,
                { headers: { 'Authorization': `Bearer ${this.token}` } });
                
            let bookJson = data.data;
            let versesNumberArray = [];
            
            for (let i = 1; i < bookJson.chapters; i++) {
                versesNumberArray.push(i);
            }
            
            let result = await this.templateEngine.processFile(this.indexFile, {bookJson: bookJson, versesNumber: versesNumberArray });
            return result;
    
        } catch (error) {
            console.log(error.msg)
            return error;
        }
    }
}