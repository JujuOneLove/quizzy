var mongoose = require('mongoose');
var answersSchema = require('./schemaAnswers')

var questionsSchema = new mongoose.Schema({
    question: String,
    answers:  [answersSchema]
});

module.exports = mongoose.model('questions', questionsSchema);
