import { server, token } from '../etc/api.js';
import { TemplateEngine } from 'thymeleaf';
import { fileURLToPath } from 'url';
import path from 'path';

export async function getBook(abbrev) {
    try {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);
        const indexFile = path.join(__dirname, "..", "/public", "/book.html");

        let templateEngine = new TemplateEngine();

        const data = await server.get(`/api/books/${abbrev}`,
            { headers: { 'Authorization': `Bearer ${token}` } });

        let bookJson = data.data;
        let versesNumberArray = [];
        
        for (let i = 1; i < bookJson.chapters; i++) {
            versesNumberArray.push(i);
        }

        let result = await templateEngine.processFile(indexFile, {bookJson: bookJson, versesNumber: versesNumberArray });

        return result;

    } catch (error) {
        console.log(error.msg)
        return error;
    }
}