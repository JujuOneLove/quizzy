const mongoose = require('mongoose');

var questionSchema = mongoose.Schema({
    text: String,
    image: String,
    answer: {
        content: String,
        isTrue: Boolean
    },
    Score: Number
},{collection: 'quizz'});
module.exports = mongoose.model('Question', questionSchema);
