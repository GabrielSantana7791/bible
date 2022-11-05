import { server, token } from '../etc/classes/api.js';
import { TemplateEngine } from 'thymeleaf';
import { fileURLToPath } from 'url';
import fs from 'fs'
import path from 'path';

export default class Model{
    constructor(){
        this.__filename = fileURLToPath(import.meta.url);
        this.__dirname = path.dirname(this.__filename);
        this.baseFile = path.join(this.__dirname, "..", "/src", "/private", "/base.html");
        this.contentFilePath = '';
        this.contentFileText = '';
        this.path = path;
        this.server = server;
        this.token = token;
        this.templateEngine = new TemplateEngine();
        this.fs = fs;
    }

    getHtmlFile(content){
        let htmlFile = this.templateEngine.processFile(this.baseFile, content);
        return htmlFile;
    }
}