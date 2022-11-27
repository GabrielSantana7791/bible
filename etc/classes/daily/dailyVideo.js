import { dbConnection } from '../db.js';

export default class DailyVideo {
    constructor() {
        this.db = dbConnection.getCon();
    }

    async getDailyVideo() {
        const query = `SELECT url FROM video`;

        const [result] = await this.db.query(query);
        return result;
    }

    async setNewDailyVideo(URL) {
        this.db.query (`UPDATE video SET URL = "${URL}";`);
    }
}