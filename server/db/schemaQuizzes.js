var mongoose = require('mongoose');

var quizzesSchema = new mongoose.Schema({
    name: String,
    logo: String,
    createdBy: String,
    keywords: [String],
    questionsAndAnswers: [{
        question: String,
        point: Number,
        answers: [{
            valid: Boolean,
            answerText: String
        }]
    }]
});

module.exports = mongoose.model('quizzes', quizzesSchema);
