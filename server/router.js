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
            }else{
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
            }else{
                res.json(quizzes);
                res.status(200);
            }
        });
    })
    .post('/upload',
        (req, res) => {
            req.files.picture.mv(__dirname + '/resources/pictures/' + req.files.picture.name,
                (err) => {
                    if (err)
                        return res.status(500).send(err);
                    res.json({ok: "ok"});
                }
            );
        })
    .post("/quizzes/new", (req, res)=>{
        const quiz = req.body;
        Quizzes.create({
            name: quiz.name,
            logo: 'images/uploads/${req.file.filename}',
            createdBy: quiz.createdBy,
            keywords: quiz.keywords,
            questionsAndAnswers: quiz.questionsAndAnswers
        }, function (err, quizBdd) {
            if (err) {
                res.status(400);
                res.json({
                    error: "Bad request"
                });
            }else{
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
