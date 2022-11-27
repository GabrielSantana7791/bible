import Model from "./model.js";
import DailyDevocional from "../etc/classes/daily/dailyDevocional.js";

export default class DevocionalModel extends Model {
    async run() {
        try {
            const dailyDevocional = new DailyDevocional();

            const [devocionalT] = await dailyDevocional.getDailyDevocional();
            let devocional = devocionalT;

            this.pageTitle = devocional.title;
            this.contentFilePath = this.path.join(this.__dirname, "..", "/src", "/private", "devocional.html");
            this.contentFileText = this.fs.readFileSync(this.contentFilePath, 'utf-8');

            let content = { pageTitle: this.pageTitle, content: this.contentFileText, devocional: devocional }

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