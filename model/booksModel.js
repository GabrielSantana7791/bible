import Model from "./model.js";

export default class BooksModel extends Model{
    async run(){
        const data = await this.server.get(`/api/books`,
            { headers: { 'Authorization': `Bearer ${this.token}` } });
        this.indexFile = this.path.join(this.__dirname, "..", "/public", "/books.html");
        let booksJson = data.data;
        let booksArray = [];
        
        for (let i = 0; i < booksJson.length; i++) {
            booksArray.push(booksJson[i].name);
        }

        let result = await this.templateEngine.processFile(this.indexFile, { books: booksJson });
        return result;

    } catch (error) {
        console.log(error.msg)
        return error;
    }
}