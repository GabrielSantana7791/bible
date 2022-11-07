import { server, token } from './api.js';

export default class DailyVerseManager {
    static async getNewVerse() {
        let verse = await server.get('api/verses/nvi/random', { headers: { 'Authorization': `Bearer ${token}` } });

        return verse.data;
    }
}