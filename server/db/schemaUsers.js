var mongoose = require('mongoose');
const quizzes = require('./schemaQuizzes');

var usersSchema = new mongoose.Schema({
    name: String,
    password: String,
    roles: [String],
    createdQuizzes: [quizzes],
    scores: [{
        quizId: quizzes,
        username: String,
        score: Number,
        dateTime: {type: Date, default: Date.now}
    }]
});

module.exports = mongoose.model('users', usersSchema);
