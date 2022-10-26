import { server, token } from '../etc/api.js';
import { TemplateEngine } from 'thymeleaf';
import { fileURLToPath } from 'url';
import path from 'path';

export async function getVerses(abbrev, chapter) {
    try {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);
        const indexFile = path.join(__dirname, "..", "/public", "/verses.html");

        let templateEngine = new TemplateEngine();

        const data = await server.get(`/api/verses/nvi/${abbrev}/${chapter}`,
            { headers: { 'Authorization': `Bearer ${token}` } });

        let verses = data.data.verses;
        
        let result = await templateEngine.processFile(indexFile, { verses: verses});

        return result;

    } catch (error) {
        console.log(error.msg)
        return error;
    }
}