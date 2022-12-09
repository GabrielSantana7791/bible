import { dbConnection } from '../classes/db.js';

export class VisitCount{
    static add(){
        const  db = dbConnection.getCon();
        const  query = 'call addViewCount();';

        db.query(query);
    }
}