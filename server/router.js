const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

let Quotes = require('./db/schemaQuote');

router
    .use(express.static('resources'))
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({
        extended: true
    }))
    .get("/quotes", (req, res) => {
        Quotes.find({}, function (err, quotes) {
            if (err) {
                res.status(400);
                res.json({
                    error: "Bad request"
                });
            }else{
                res.json(quotes);
                res.status(200);
            }
        });
    })
    .post('/quote',
        (req, res) => {
            let quote = new Quotes(req.body);
            quote.save()
                .then(todo => {
                    Quotes.find({}, function (err, quotes) {
                        if (err) {
                            res.status(400);
                            res.json({
                                error: "Bad request"
                            });
                        }else{
                            res.json(quotes);
                            res.status(200);
                        }
                    });
                })
                .catch(err => {
                    res.status(400).send('add failed');
                });
        })
    .get("/quote/:id", (req, res) => {
        Quotes.findOne({ _id : req.params.id }, function (err, quote) {
            if (err) {
                res.status(400);
                res.json({
                    error: "Bad request"
                });
            }else{
                res.json(quote);
                res.status(200);
            }
        });
        res.status(200);
    })
    .delete('/quote/:id', (req, res) => {
        Quotes.findByIdAndRemove({_id: req.params.id}, function(err, quotes){
            if(err) res.json(err);
            else {
                Quotes.find({}, function (err, quotes) {
                    if (err) {
                        res.status(400);
                        res.json({
                            error: "Bad request"
                        });
                    }else{
                        res.json(quotes);
                        res.status(200);
                    }
                });
            }
        });
    })
    .use((req, res) => {
        res.status(400);
        res.json({
            error: "Bad request"
        });
    });

module.exports = router;
