import Model from "./model.js";

export default class BooksModel extends Model{
    async run(){
        const data = await this.server.get(`/api/books`,
            { headers: { 'Authorization': `Bearer ${this.token}` } });

        this.contentFilePath = this.path.join(this.__dirname, "..", "/src", "/private", "books.html");
        this.contentFileText = this.fs.readFileSync(this.contentFilePath, 'utf-8');

        let booksJson = data.data;
        let booksArray = [];

        for (let i = 0; i < booksJson.length; i++) {
            booksArray.push(booksJson[i].name);
        }

        let content = { content: this.contentFileText, books: booksJson };

        let htmlFile = this.getHtmlFile(content);
        return htmlFile;

    } catch (error) {
        console.log(error.msg)
        return error;
    }
}