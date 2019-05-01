const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const Quotes = require('./db/data');

router
    .use(express.static('resources'))
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({
        extended: true
    }))
    .get("/quotes", (req, res) => {
        res.json(Quotes.getQuotes());
    })
    .post('/quote',
        (req, res) => {
            Quotes.insertQuote(req.body);
            res.json(Quotes.getQuotes());
        })

    .get("/quote/:id", (req, res) => {
        res.json(Quotes.getQuote(req.params.id));
    })
    .delete('/quote/:id', (req, res) => {
        Quotes.removeQuote(req.params.id);
        res.json(Quotes.getQuotes());
    })
    .use((req, res) => {
        res.status(400);
        res.json({
            error: "Bad request"
        });
    });

module.exports = router;
