var mongoose = require('mongoose');
const scores = require('./schemaScores');

var quizzesSchema = new mongoose.Schema({
    name: String,
    logo: String,
    createdBy: {},
    keywords: [String],
    questionsAndAnswers: [{
        question: String,
        point: Number,
        answers: [{
            valid: Boolean,
            answerText: String
        }]
    }],
    scores: [scores]
});

module.exports = mongoose.model('quizzes', quizzesSchema);
