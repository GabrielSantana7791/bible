import express from 'express'
import {run} from './controller/controller.js'

const app = express();
app.listen(8080)

run(app);
