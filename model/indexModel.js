import Model from "./model.js";
import DailyVerse from "../etc/classes/daily/dailyVerse.js";
import DailyVideo from "../etc/classes/daily/dailyVideo.js";
import DailyDevocional from "../etc/classes/daily/dailyDevocional.js";

export default class IndexModel extends Model {
    async run() {
        try {
            //UPDATE: instanciar apenas uma vez
            const dailyVerse = new DailyVerse();
            const dailyVideo = new DailyVideo();
            const dailyDevocional = new DailyDevocional();

            this.pageTitle = "Verso Diário - Bíblia online";
            this.contentFilePath = this.path.join(this.__dirname, "..", "/src", "/private", "index.html");
            this.contentFileText = this.fs.readFileSync(this.contentFilePath, 'utf-8');

            //video; verso; devocional pelo DB;
            const [videoURL] = await dailyVideo.getDailyVideo();
            const [verse] = await dailyVerse.getDailyVerse();
            const [devocional] = await dailyDevocional.getDailyDevocional();


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

            let content = {
                pageTitle: this.pageTitle,
                content: this.contentFileText, videoUrl: videoURL, dailyVerse: verse,
                devocional: devocional,
                bible: bible
            };

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