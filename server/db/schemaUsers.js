var mongoose = require('mongoose');
const quizzes = require('./schemaQuizzes');

var usersSchema = new mongoose.Schema({
    name: String,
    password: String,
    roles: [String],
    createdQuizzes: [{}],
    scores: [{
        quizId: {},
        score: Number
    }]
}, { versionKey: false });

module.exports = mongoose.model('users', usersSchema);
