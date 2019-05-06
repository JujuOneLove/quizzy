var mongoose = require('mongoose');
const quiz = require('./schemaQuizzes');
const user = require('./schemaUsers');

var scoresSchema = new mongoose.Schema({
    quizId: quiz,
    userId: user,
    score: Number,
    dateTime: { type: Date, default: Date.now }
});

module.exports = mongoose.model('scores', scoresSchema);

