var mongoose = require('mongoose');

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
    topScore: [{
        username: String,
        score: Number,
        dateTime: { type: Date }}]
});

module.exports = mongoose.model('quizzes', quizzesSchema);
