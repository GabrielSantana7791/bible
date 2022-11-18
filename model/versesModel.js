import Model from "./model.js";

export default class VersesModel extends Model {
    async run(abbrev, chapter) {
        try {
            const data = await this.server.get(`/api/verses/nvi/${abbrev}/${chapter}`,
                { headers: { 'Authorization': `Bearer ${this.token}` } });

            this.contentFilePath = this.path.join(this.__dirname, "..", "/src", "/private", "verses.html");
            this.contentFileText = this.fs.readFileSync(this.contentFilePath, 'utf-8');

            this.pageTitle = data.data.book.name;

            let content = { pageTitle: this.pageTitle, content: this.contentFileText, data: data.data }

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