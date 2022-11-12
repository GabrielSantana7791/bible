import Model from "./model.js";

export default class IndexModel extends Model {
    async run() {
        this.contentFilePath = this.path.join(this.__dirname, "..", "/src", "/private", "index.html");
        this.contentFileText = this.fs.readFileSync(this.contentFilePath, 'utf-8');

        const videoPath = this.path.join(this.__dirname, '..', '/etc', '/others', 'video.txt');
        let videoData = this.fs.readFileSync(videoPath, 'utf-8');

        const versePath = this.path.join(this.__dirname, '..', '/etc', 'others', 'dailyVerse.txt');
        let verseData = await JSON.parse(this.fs.readFileSync(versePath, 'utf-8')).verse;
        let verseText = `"${verseData.text}" ${verseData.book.name} ${verseData.chapter}:${verseData.number}`;


        const devocionalPath = this.path.join(this.__dirname, '..', '/etc', 'others', 'devocional.txt');
        let devocional = await JSON.parse(this.fs.readFileSync(devocionalPath, 'utf-8'));
        let devocionalText = devocional.devocional[devocional.settings.actual]

        //get bible JSON from API
        const data = await this.server.get(`/api/books`,
            { headers: { 'Authorization': `Bearer ${this.token}` } });

        let booksJson = data.data;
        let booksVT = [];
        let booksNT = [];

        for (let i = 0; i < booksJson.length; i++) {
            if (booksJson[i].testament == 'VT') {
                booksVT.push(booksJson[i]);
            } else {
                booksNT.push(booksJson[i]);
            }
        }

        let bible = { content: this.contentFileText, booksVT: booksVT, booksNT: booksNT };

        this.pageTitle = "Verso Diário - Bíblia online";

        let content = {
            pageTitle: this.pageTitle,
            content: this.contentFileText, videoUrl: videoData, dailyVerse: verseText,
            devocional: devocionalText,
            bible: bible
        };

        let htmlFile = this.getHtmlFile(content);

        return htmlFile;
    }
}