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
    .post("/connexion", (req, res) => {
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
            logo: 'images/uploads/'+req.files.picture.filename,
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
