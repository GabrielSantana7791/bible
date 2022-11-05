import DailyVerseManager from "../dailyVerseManager.js";
import Daily from "./daily.js";

export default class DailyVerse extends Daily {
    constructor() {
        let dailyFile = 'dailyVerse.txt';
        super(dailyFile);
    }

    async setNewDailyText() {
        const data = await DailyVerseManager.getNewVerse();

        const dailyText = `"${data.text}" ${data.book.name} ${data.chapter}:${data.number}`;
        data.text;
        this.setDailyText(dailyText);

        return dailyText;
    }
}