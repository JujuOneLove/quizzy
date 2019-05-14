var mongoose = require('mongoose');

var quizzesSchema = new mongoose.Schema({
    name: String,
    logo: String,
    createdBy: String,
    keywords: [String],
    questionsAndAnswers: [{
        question: String,
        point: Number,
        image: Boolean,
        answers: [{
            valid: Boolean,
            answerText: String,
            image: String
        }]
    }],
    topScore: {
        name: String,
        score: Number
    }
});

module.exports = mongoose.model('quizzes', quizzesSchema);
