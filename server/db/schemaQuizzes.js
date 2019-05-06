var mongoose = require('mongoose');
var questionsSchema = require('./schemaQuestions');

var quizzesSchema = mongoose.Schema({
    id: String,
    name: String,
    logoName: String,
    createdBy: String,
    keywords: [String],
    questionsAndAnswers: [questionsSchema]
});

module.exports = mongoose.model('quizzes', quizzesSchema);
