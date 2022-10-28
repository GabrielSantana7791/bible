import Model from "./model.js";

export default class IndexModel extends Model{
    async run(){
        this.contentFilePath = this.path.join(this.__dirname, "..", "/src", "/private", "index.html");
        this.contentFileText = this.fs.readFileSync(this.contentFilePath, 'utf-8');

        const videoPath = this.path.join(this.__dirname, '..', '/etc', 'video.txt');
        let videoData = this.fs.readFileSync(videoPath, 'utf-8');

        const versePath = this.path.join(this.__dirname, '..', '/etc', 'dailyVerse.txt');
        let verseText = this.fs.readFileSync(versePath, 'utf-8');

        let content = {content: this.contentFileText,videoUrl: videoData, dailyVerse: verseText};

        let htmlFile = this.getHtmlFile(content);  
        return htmlFile;
    }
}