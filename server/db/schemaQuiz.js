var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name: String,
    password: String
});

var answersSchema = new mongoose.Schema({
    valid: Boolean,
    point: Number,
    answerText: String
});

var questionsAndAnswersSchema = new mongoose.Schema({
    question: String,
    answers:  [answersSchema]
});

var quizSchema = mongoose.Schema({
    id: String,
    name: String,
    logoName: String,
    createdBy: String,
    keywords: [String],
    questionsAndAnswers: [questionsAndAnswersSchema]
});

// optionnel pour le moment

// var scoreSchema = new mongoose.Schema({
//     quizId: String,
//     userId: String,
//     score: Number,
//     dateTime: { type: Date, default: Date.now }
// });

module.exports = mongoose.model('quiz', quizSchema);
module.exports = mongoose.model('user', userSchema);
// module.exports = mongoose.model('score', scoreSchema);
