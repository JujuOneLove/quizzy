var mongoose = require('mongoose');


var scoreSchema = new mongoose.Schema({
    quizId: String,
    userId: String,
    score: Number,
    dateTime: { type: Date, default: Date.now }
});

module.exports = mongoose.model('score', scoreSchema);