import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

let __filename = fileURLToPath(import.meta.url);
let __dirname = path.dirname(__filename);

export default class Daily {
    constructor(dailyFile) {
        this.fs = fs;
        this.path = path;
        this.dailyFile = dailyFile;//file name
        this.dailyPath = path.join(__dirname, '..', '..', '/others', dailyFile);
        this.dailyData = JSON.parse(fs.readFileSync(this.dailyPath, 'utf-8'));
    }

    setNewDailyText() {
        //implement
    }

    async setNewDailyText(text) {
        //implement
    }

    getDailyText() {
        //implement
    }

    getDailyTime() {
        return this.dailyData.settings.time;
    }

    setDailyTime(time) {
        this.dailyData.settings.time = time;
        setDailyData();
    }

    setDailyData() {
        let objStringify = JSON.stringify(this.dailyData);
        fs.writeFileSync(path.join(this.dailyPath), objStringify, 'utf-8');
    }
}