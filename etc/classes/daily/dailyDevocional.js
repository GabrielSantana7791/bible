import { dbConnection } from '../db.js';

export default class DailyDevocional {
    constructor() {
        this.db = dbConnection.getCon();
    }

    async getDailyDevocional() {
        const query = `SELECT * FROM devocional JOIN daily_devocional_timer
        ON daily_devocional_timer.daily_devocional = devocional.id;`;

        const [result] = await this.db.query(query);
        return result;
    }

    async setNewDailyDevocional() {
        let [result] = await this.db.query(`SELECT COUNT(id) AS length FROM devocional;`);
        const devocionalLength = result[0].length;

        [result] = await this.db.query(`SELECT daily_devocional FROM daily_devocional_timer;`);
        const id = await result[0].daily_devocional;

        let newDevocionalId = id;

        while (newDevocionalId == id) {
            newDevocionalId = Math.floor(Math.random() * devocionalLength) + 1;
        }

        this.db.query(`UPDATE daily_devocional_timer SET 
        daily_devocional = ${newDevocionalId}, 
        last_change = NOW()`);
    }
}