import express from 'express'
import {run} from './controller/controller.js'
import dailyTimer  from './etc/classes/dailyTimer.js'
import DailyVerse from './etc/classes/daily/dailyVerse.js';

const app = express();
app.listen(8080)

run(app);

let dailyVerse = new DailyVerse();
dailyTimer(dailyVerse);