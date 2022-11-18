import Model from "./model.js";

export default class DevocionalModel extends Model {
    async run() {
        try{
            this.contentFilePath = this.path.join(this.__dirname, "..", "/src", "/private", "devocional.html");
            this.contentFileText = this.fs.readFileSync(this.contentFilePath, 'utf-8');

            let devocionalPath = this.path.join(this.__dirname, "..", "/etc", "/others", "devocional.txt");
            let devocionalData = JSON.parse(this.fs.readFileSync(devocionalPath, 'utf-8'));
            let devocional = devocionalData.devocional[devocionalData.settings.actual];

            this.pageTitle = devocional.title;

            let content = { pageTitle: this.pageTitle, content: this.contentFileText, devocional: devocional}

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