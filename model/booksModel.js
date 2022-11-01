import Model from "./model.js";

export default class BooksModel extends Model{
    async run(){
        const data = await this.server.get(`/api/books`,
            { headers: { 'Authorization': `Bearer ${this.token}` } });

        this.contentFilePath = this.path.join(this.__dirname, "..", "/src", "/private", "books.html");
        this.contentFileText = this.fs.readFileSync(this.contentFilePath, 'utf-8');

        let booksJson = data.data;
        let booksVT = [];
        let booksNT = [];

        for (let i = 0; i < booksJson.length; i++) {
            if(booksJson[i].testament == 'VT'){
                booksVT.push (booksJson[i]);
            }else{
                booksNT.push(booksJson[i]);
            }
        }

        let content = { content: this.contentFileText, booksVT: booksVT, booksNT: booksNT };

        let htmlFile = this.getHtmlFile(content);
        return htmlFile;

    } catch (error) {
        console.log(error.msg)
        return error;
    }
}