const mongoose = require('mongoose');
const quizz = require('./schemaQuizz')

const usersSchema = mongoose.Schema(
    {
        username: String,
        password: String,
        quizzCreate: [quizz],
        quizzPlay: [quizz]
    },
    { versionKey: false },{collection: 'joueur'});
module.exports = mongoose.model('Joueur', usersSchema);
