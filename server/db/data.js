db.question.drop();
db.question.insert([
    {text: "",
        image: "",
        answer: {
            content: "",
            isTrue: Boolean
        },
        Score: Number
    },
    {message: 'I think therefore I am', author: "Rene Descartes"},
    {message: 'Life is like riding a bicycle. To keep your balance, you must keep moving', author: "Albert Einstein"},
    {message: "You talkin' to me?", author: "Travis Bickle"}
]);

db.quizz.drop();
db.quizz.insert([
    {message: "Elementary, my dear Watson", author: "Sherlock Holmes"},
]);

db.joueur.drop();
db.joueur.insert([
    {username: "admin", password: "admin"}
]);
