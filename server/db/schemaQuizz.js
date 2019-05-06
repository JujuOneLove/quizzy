const mongoose = require('mongoose');
const question = require('./schemaQuestion')

var quizzSchema = mongoose.Schema({
    name: String,
    icon: String,
    keywords: [String],
    questions: [question],
},{collection: 'quizz'});
module.exports = mongoose.model('Quizz', quizzSchema);
