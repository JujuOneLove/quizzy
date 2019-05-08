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
        Quizzes.find({}, function (err, quizzes) {
            if (err) {
                res.status(400);
                res.json({
                    error: "Bad request"
                });
            } else {
                res.json(quizzes);
                res.status(200);
            }
        });
    })
    .get("/quizzes/:id", (req, res) => {
        Quizzes.findById(req.params.id, function (err, quizzes) {
            if (err) {
                res.status(400);
                res.json({
                    error: "Bad request"
                });
            } else {
                res.json(quizzes);
                res.status(200);
            }
        });
    })
    .post("/quizzes/new", (req, res) => {
        const quiz = req.body;
        console.log(quiz);
        req.files.picture.mv(__dirname + '/resources/pictures/' + req.files.picture.name,
            (err) => {
                if (err)
                    return res.status(500).send(err);
            }
        );

        Quizzes.create({
            name: quiz.name,
            logo: req.files.picture.name,
            createdBy: JSON.parse(quiz.createdBy),
            keywords: JSON.parse(quiz.keywords),
            questionsAndAnswers: JSON.parse(quiz.questions)
        }, function (err, quizBdd) {
            if (err) {
                res.status(400);
                console.log('err', err)
                res.json({
                    error: "Bad request"
                });
            } else {
                res.json(quizBdd);
                res.status(200);
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
