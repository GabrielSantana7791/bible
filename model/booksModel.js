import { server, token } from '../etc/api.js';
import { TemplateEngine } from 'thymeleaf';
import { fileURLToPath } from 'url';
import path from 'path';

export async function getBooks() {
    try {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);
        const indexFile = path.join(__dirname, "..", "/public", "/books.html");

        let templateEngine = new TemplateEngine();

        const data = await server.get(`/api/books`,
            { headers: { 'Authorization': `Bearer ${token}` } });

        let booksJson = data.data;
        let booksArray = [];
        
        for (let i = 0; i < booksJson.length; i++) {
            booksArray.push(booksJson[i].name);
        }

        let result = await templateEngine.processFile(indexFile, { books: booksJson });

        return result;

    } catch (error) {
        console.log(error.msg)
        return error;
    }
}