import express from 'express'
import {run} from './controller/controller.js'
import dailyTimer  from './etc/classes/dailyTimer.js'
import DailyVerse from './etc/classes/daily/dailyVerse.js';
import https from 'https';
import fs from 'fs';

const app = express();
app.listen(80);

let httpsSever = https;

httpsSever.createServer({
    cert: fs.readFileSync("./etc/others/ssl/code.crt"),
    key: fs.readFileSync("./etc/others/ssl/code.key")
    
}, app).listen(443);

run(app);

let dailyVerse = new DailyVerse();
dailyTimer(dailyVerse);