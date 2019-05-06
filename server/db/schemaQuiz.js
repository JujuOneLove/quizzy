var mongoose = require('mongoose');
var questionsSchema = require('./schemaQuestions');

var quizSchema = mongoose.Schema({
    id: String,
    name: String,
    logoName: String,
    createdBy: String,
    keywords: [String],
    questionsAndAnswers: [questionsSchema]
});

module.exports = mongoose.model('quiz', quizSchema);
