import IndexModel from '../model/indexModel.js'
import VerseModel from '../model/verseModel.js'
import BooksModel from '../model/booksModel.js';
import VersesModel from '../model/versesModel.js';
import BookModel from '../model/bookModel.js';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import DevocionalModel from '../model/devocionalModel.js';

export function run(app) {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    app.use(express.static(path.join(__dirname, '..', 'src', '/public')));

    app.get('/', async (req, res) => {
        if (!req.secure) {
            res.redirect("https://" + req.headers.host + req.url);

        } else {
            const indexModel = new IndexModel();
            const index = await indexModel.run();

            res.send(index);
        }

    })

    app.get('/devocional', async (req, res) => {
        if (!req.secure) {
            res.redirect("https://" + req.headers.host + req.url);

        } else {
            const devocionalModel = new DevocionalModel();
            const devocional = await devocionalModel.run();

            res.send(devocional);
        }

    })

    app.get('/bible', async (req, res) => {
        if (!req.secure) {
            res.redirect("https://" + req.headers.host + req.url);

        } else {
            const booksModel = new BooksModel();
            const books = await booksModel.run();
            res.send(books);
        }
    })

    app.get('/bible/:abbrev', async (req, res) => {
        if (!req.secure) {
            res.redirect("https://" + req.headers.host + req.url);

        } else {
            const bookModel = new BookModel();
            const book = await bookModel.run(req.params.abbrev);
            res.send(book);
        }

    })

    app.get('/bible/:abbrev/:chapter/', async (req, res) => {
        if (!req.secure) {
            res.redirect("https://" + req.headers.host + req.url);

        } else {
            const versesModel = new VersesModel();
            const book = await versesModel.run(req.params.abbrev, req.params.chapter);
            res.send(book);
        }

    })

    app.get('/bible/:book/:chapter/:number', async (req, res) => {
        if (!req.secure) {
            res.redirect("https://" + req.headers.host + req.url);

        } else {
            const verseModel = new VerseModel();
            const verse = await verseModel.run(req.params.book, req.params.chapter,
                req.params.number);
            res.send(verse);
        }

    })
}