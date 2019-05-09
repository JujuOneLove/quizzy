process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server/server');
var mongoose = require('mongoose');
var Quiz = require("../server/db/schemaQuizzes");
var should = chai.should();


chai.use(chaiHttp);

const USER = {
    "user": "admin",
    "password": "admin"
};
const QUIZ = {
    "name": "La France",
    "logo": "",
    "createdBy": USER,
    "keywords": ["pays", "france"],
    "questionsAndAnswers": [
        {
            "question": "À l’origine, le Louvre était une prison.",
            "point": 1,
            "answers": [
                {"valid": false, "answerText": "Vrai"},
                {"valid": true, "answerText": "Faux"}]
        },
        {
            "question": "Le général de Gaulle a été président de la France avant et après la Seconde Guerre mondiale.",
            "point": 1,
            "answers": [
                {"valid": false, "answerText": "Vrai"},
                {"valid": true, "answerText": "Faux"}]
        },
        {
            "question": "« La drôle de guerre » est la période qui s’est écoulée entre les deux Grandes Guerres.",
            "point": 1,
            "answers": [
                {"valid": false, "answerText": "Vrai"},
                {"valid": true, "answerText": "Faux"}]
        },
    ]
};

describe('Quizzes', function () {
    beforeEach(function (done) {
        var newQuiz = new Quiz(QUIZ);
        newQuiz.save(function (err) {
            done();
        });
    });
    afterEach(function (done) {
        Quiz.collection.drop();
        done();
    });

    it('should list ALL quizzes on /quizzes GET', function (done) {
        chai.request(server).get('/quizzes').end(function (err, res) {
            res.should.have.status(200);
            res.should.be.json;
            res.body.should.be.a('array');
            console.log(res.body[0]);
            res.body[0].should.have.property('_id');
            res.body[0].should.have.property('name');
            res.body[0].name.should.equal('La France');
            done();
        });
    });

    it('should list a SINGLE quiz on /quizzes/<id> GET', function (done) {
        var newQuiz = new Quiz(QUIZ);
        newQuiz.save(function (err, data) {
            chai.request(server).get('/quizzes/' + data.id).end(function (err, res) {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('object');
                res.body.should.have.property('_id');
                res.body.should.have.property('name');
                res.body.should.have.property('questionsAndAnswers');
                res.body.name.should.equal('La France');
                res.body._id.should.equal(data.id);
                done();
            });
        });
    });

    it('should login the user on /login', function(done) {
        chai.request(server)
            .post('/login')
            .send({'username': 'antho', 'password': 'antho'})
            .end(function(err, res){
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('object');
                res.body.should.have.property('isConnected');
                res.body.isConnected.should.equal(true);
                done();
            });
    });


});

// git des test qu'on a fait en cours
// https://forge.univ-artois.fr/iokanaan.goutier/TP2-tests-Correction/tree/master
// https://forge.univ-artois.fr/iokanaan.goutier/TP1-tests-Correction/tree/master