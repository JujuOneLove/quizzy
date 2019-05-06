const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

let Quizzes = require('./db/schemaQuizzes');

router
    .use(express.static('resources'))
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({
        extended: true
    }))
    .get("/quizzes", (req, res) => {
        Quizzes.find()
            .then(notes => {
                res.json(notes);
            }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving notes."
            });
        });
    })
    .use((req, res) => {
        res.status(400);
        res.json({
            error: "Bad request"
        });
    });

module.exports = router;
