import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

let __filename = fileURLToPath(import.meta.url);
let __dirname = path.dirname(__filename);

export default class Daily {
    constructor(daily, dailyFile) {
        this.dailyFile = dailyFile;
        this.dailyVersePath = path.join(__dirname, '..', '..', '/others', daily);
        this.dailyVerseData = JSON.parse(fs.readFileSync(this.dailyVersePath, 'utf-8'));
    }

    setNewDailyText() {
        //implement
    }

    getDailyText() {
        return this.dailyVerseData.text;
    }

    getDailyTime() {
        return this.dailyVerseData.time;
    }

    async setDailyText(text) {
        this.dailyVerseData.text = text;

        let objStringify = JSON.stringify(this.dailyVerseData);
        fs.writeFileSync(path.join(this.dailyVersePath), objStringify, 'utf-8');
    }

    setDailyTime(time) {
        this.dailyVerseData.time = time;

        let objStringify = JSON.stringify(this.dailyVerseData);
        fs.writeFileSync(path.join(this.dailyVersePath), objStringify, 'utf-8');
    }
}