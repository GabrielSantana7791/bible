import {index} from '../model/indexModel.js'
import {getVerse} from '../model/verseModel.js'
import { getBooks } from '../model/booksModel.js';
import { getVerses } from '../model/versesModel.js';
import {getBook} from '../model/bookModel.js';

export function run(app) {
    app.get('/', async (req, res) => {
        console.log(index());
        res.sendFile(index());
    })

    app.get('/bible', async (req, res) => {
        const books = await getBooks();
        res.send(books);
    })

    app.get('/bible/:abbrev', async (req, res) => {
        const book = await getBook(req.params.abbrev);
        res.send(book);
    })

    app.get('/bible/:abbrev/:chapter/', async (req, res) => {
        const book = await getVerses(req.params.abbrev, req.params.chapter);
        res.send(book);
    })

    app.get('/bible/:book/:chapter/:number', async (req, res) => {
        const verse = await getVerse(req.params.book, req.params.chapter,
            req.params.number);
        res.send(verse);
    })   
}