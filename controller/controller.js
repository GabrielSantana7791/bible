import {index} from '../model/indexModel.js'
import {getVerse} from '../model/verseModel.js'
export function run(app) {
    app.get('/bible/:book/:chapter/:number', async (req, res) => {
        const verse = await getVerse(req.params.book, req.params.chapter,
            req.params.number);
        res.send(verse);
    })

    app.get('/', async (req, res) => {
        res.sendFile(index());
    })
}