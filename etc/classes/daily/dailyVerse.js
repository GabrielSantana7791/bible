import DailyVerseManager from "../dailyVerseManager.js";
import Daily from "./daily.js";

export default class DailyVerse extends Daily {
    constructor() {
        let dailyFile = 'dailyVerse.txt';
        super(dailyFile);
    }

    getDailyText() {
        return this.dailyData.text;
    }

    async setNewDailyText() {
        const data = await DailyVerseManager.getNewVerse();

        const now = new Date();

        this.dailyData.verse = data;
        this.dailyData.settings.time.lastDay = now.getDate();

        this.setDailyData();
    }
}