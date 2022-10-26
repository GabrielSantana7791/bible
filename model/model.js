import { server, token } from '../etc/api.js';
import { TemplateEngine } from 'thymeleaf';
import { fileURLToPath } from 'url';
import path from 'path';

export default class Model{
    constructor(){
        this.__filename = fileURLToPath(import.meta.url);
        this.__dirname = path.dirname(this.__filename);
        this.indexFile = path.join(this.__dirname, "..", "/public", "/book.html");
        this.path = path;
        this.server = server;
        this.token = token;
        this.templateEngine = new TemplateEngine();
    }
}