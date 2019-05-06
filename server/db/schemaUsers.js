var mongoose = require('mongoose');
const quizzes = require('./schemaQuizzes');
const scores = require('./schemaScores');

var usersSchema = new mongoose.Schema({
    name: String,
    password: String,
    roles: [String],
    createdQuizzes: [quizzes],
    scores: [scores]
});

module.exports = mongoose.model('users', usersSchema);
