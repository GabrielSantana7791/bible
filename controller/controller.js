import IndexModel from '../model/indexModel.js'
import VerseModel from '../model/verseModel.js'
import BooksModel from '../model/booksModel.js';
import VersesModel from '../model/versesModel.js';
import BookModel from '../model/bookModel.js';

export function run(app) {
    app.get('/', async (req, res) => {
        const indexModel = new IndexModel();
        const index = await indexModel.run();

        res.sendFile(index);
    })

    app.get('/bible', async (req, res) => {
        const booksModel = new BooksModel();
        const books = await booksModel.run();
        res.send(books);
    })

    app.get('/bible/:abbrev', async (req, res) => {
        const bookModel = new BookModel();
        const book = await bookModel.run(req.params.abbrev);
        res.send(book);
    })

    app.get('/bible/:abbrev/:chapter/', async (req, res) => {
        const versesModel = new VersesModel();
       const book = await versesModel.run(req.params.abbrev, req.params.chapter);
        res.send(book);
    })

    app.get('/bible/:book/:chapter/:number', async (req, res) => {
        const verseModel = new VerseModel();
        const verse = await verseModel.run(req.params.book, req.params.chapter,
            req.params.number);
        res.send(verse);
    })   
}