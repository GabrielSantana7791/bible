import { dbConnection } from '../db.js';
import { server, token } from '../api.js';

export default class DailyVerse {
    constructor() {
        this.db = dbConnection.getCon();
    }

    async getDailyVerse() {
        const query = `SELECT * FROM getDailyVerse;`;

        const [result] = await this.db.query(query);

        const verse = await server.get(`/api/verses/nvi/${result[0].abbrev}/${result[0].chapter}/${result[0].number}`,
        { headers: { 'Authorization': `Bearer ${token}` } });
        
        return verse.data;
    }

    async setNewDailyVerse() {
        let [result] = await this.db.query (`SELECT COUNT(id) AS length FROM daily_verse;`);
        const verseLength = result[0].length;

        [result] = await this.db.query (`SELECT daily_verse FROM daily_verse_timer;`);
        const id = await result[0].daily_verse;

        let newVerseId =  id;

        while (newVerseId == id) {
            newVerseId = Math.floor(Math.random() * verseLength) + 1;
        }

        this.db.query (`UPDATE daily_verse_timer SET 
        daily_verse = ${newVerseId}, 
        last_change = NOW()`);
    }

    async getDailyTime(){
        let [result] = await this.db.query (`SELECT hr_to_change FROM daily_verse_timer;`);
        const date = result[0].hr_to_change;

        return date;
    }

    async getLastChange(){
        let [result] = await this.db.query (`SELECT last_change FROM daily_verse_timer;`);
        const date = result[0].last_change;

        return date;
    }
}