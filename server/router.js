const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();



let Quizzes = require('./db/schemaQuizzes');
let Users = require('./db/schemaUsers');
const md5 = require('md5');

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
    .get("/quizzes/user/:user", (req, res) => {
        Quizzes.find({ createdBy:req.params.user}, function (err, quizzes) {
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
    .post("/savescore",(req, res) => {
        Users.updateOne({name:req.body.user.username, password: md5(req.body.user.password)}, { $push:{scores:{score:req.body.score,quizId: req.body.quiz}}}, function (err) {
            if(err)
                res.status(400);
        });
        Quizzes.updateOne({_id:req.body.quiz._id},{$push:{topScore:{score:req.body.score, name:req.body.user.username}}}, function (err) {
            if(err)
                res.status(400);
        });
        res.status(200);
    })
    .post("/login", (req, res) => {
        if (!req.body.username || !req.body.password) {
            res.json({isConnected: false})
        } else {
            Users.findOne({name: req.body.username, password: md5(req.body.password)})
                .exec((err, data) => {
                    if (err) console.log("error", err);
                    else {
                        if (data) res.json({isConnected: true});
                        else res.json({isConnected: false})
                    }
                })
        }
    })
    .post("/signUp", (req, res) => {
        if (!req.body.username || !req.body.password) {
            res.json({isConnected: false})
        } else {
            Users.findOne({name: req.body.username})
                .exec((err, data) => {
                    if (err) console.log("error", err);
                    else {
                        if (data) res.json({isConnected: false});
                        else {
                            const q = new Users({name:req.body.username,password:md5(req.body.password)});
                            q.save()
                                .then(() => res.json({isConnected: true}))
                                .catch(err => res.status(400).send("unable to save to database:", err))
                        }
                    }
                })
        }
    })
    .post("/quizzes/new", (req, res)=>{
        const quiz = req.body;
        console.log(quiz);
        req.files.picture.mv(__dirname + '/../public/img/' + req.files.picture.name,
            (err) => {
                if (err)
                    return res.status(500).send(err);
            }
        );

        Quizzes.create({
            name: quiz.name,
            logo: '/img/' + req.files.picture.name,
            createdBy: JSON.parse(quiz.createdBy),
            keywords: JSON.parse(quiz.keywords),
            questionsAndAnswers: JSON.parse(quiz.questions)
        }, function (err, quizBdd) {
            if (err) {
                res.status(400);
                console.log('err', err);
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
