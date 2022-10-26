import Model from "./model.js";

export default class IndexModel extends Model{
    async run(){
        this.indexFile = this.path.join(this.__dirname, "..", "/public", "index.html");
        return this.indexFile;
    }
}