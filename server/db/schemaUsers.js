var mongoose = require('mongoose');
const quizzes = require('./schemaQuizzes');

var usersSchema = new mongoose.Schema({
    name: String,
    password: String,
    roles: [String],
    createdQuizzes: [{}],
    scores: [{
        quizId: {},
        username: String,
        score: Number,
        dateTime: {type: Date, default: Date.now}
    }]
}, { versionKey: false });

module.exports = mongoose.model('users', usersSchema);
