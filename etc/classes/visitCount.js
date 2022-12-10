import { dbConnection } from '../classes/db.js';

export class VisitCount{
    static add(req){
        const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
        const url = req.url;

        const  db = dbConnection.getCon();
        const  query = `call addViewCount('${url}', '${ip}');`;
        db.query(query);
    }
}