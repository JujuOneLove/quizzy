var mongoose = require('mongoose');

var answersSchema = new mongoose.Schema({
    valid: Boolean,
    point: Number,
    answerText: String
});

module.exports = mongoose.model('answers', answersSchema);
