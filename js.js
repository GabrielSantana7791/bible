import express from 'express'
import {run} from './controller/controller.js'
import dailyTimer  from './etc/classes/dailyTimer.js'
import DailyVerse from './etc/classes/daily/dailyVerse.js';
import { dbConnection } from './etc/classes/db.js';
import https from 'https';
import fs from 'fs';

dbConnection.connect('versodiario', 'root', null, 'localhost');

const [result] = await dbConnection.getCon().query (`SELECT COUNT(id) AS length FROM daily_verse;`);

const app = express();
app.listen(80);

let httpsSever = https;

httpsSever.createServer({
    cert: fs.readFileSync("./etc/others/ssl/code.crt", "utf8"),
    ca: fs.readFileSync("./etc/others/ssl/ca.crt", "utf8"),
    key: fs.readFileSync("./etc/others/ssl/code.key", "utf8")
   
    
}, app).listen(443);
run(app);

let dailyVerse = new DailyVerse();
dailyTimer(dailyVerse);