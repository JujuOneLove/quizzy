//use exple1
db.users.remove({});
db.quizzes.remove({});
var user1 = db.users.insert(
    {
        "user": "admin",
        "password": "admin"
    });
var user2 = db.users.insert(
    {
        "user": "antho",
        "password": "antho"
    });
var user3 = db.users.insert(
    {
        "user": "flo",
        "password": "flo"
    });
var user4 = db.users.insert(
    {
        "user": "jul",
        "password": "jul"
    });

var user = {
    "user": "antho",
    "password": "antho"
};
var quiz1 = db.quizzes.insert({
    "name": "La France",
    "logo": "",
    "createdBy": user,
    "keywords": ["pays", "france"],
    "questionsAndAnswers": [
        {
            "question": "À l’origine, le Louvre était une prison.",
            "point": 1,
            "answers": [
                {"valid": false, "answerText": "Vrai"},
                {"valid": true, "answerText": "Faux"}]
        },
        {
            "question": "Le général de Gaulle a été président de la France avant et après la Seconde Guerre mondiale.",
            "point": 1,
            "answers": [
                {"valid": false, "answerText": "Vrai"},
                {"valid": true, "answerText": "Faux"}]
        },
        {
            "question": "« La drôle de guerre » est la période qui s’est écoulée entre les deux Grandes Guerres.",
            "point": 1,
            "answers": [
                {"valid": false, "answerText": "Vrai"},
                {"valid": true, "answerText": "Faux"}]
        },
    ]
});

var quiz2 = db.quizzes.insert({
    "name": "La Coupe du monde de football",
    "logo": "",
    "createdBy": user,
    "keywords": ["coupe du monde", "football", "soccer", "cdm"],
    "questionsAndAnswers": [
        {
            "question": "Avec 13 buts, Just Fontaine détient le record du plus grand nombre de buts marqués au cours d’un seul tournoi.",
            "point": 1,
            "answers": [
                {"valid": true, "answerText": "Vrai"},
                {"valid": false, "answerText": "Faux"}]
        },
        {
            "question": "En 2006, Lionel Messi a aidé l’Argentine à remporter la Coupe du monde de football.",
            "point": 1,
            "answers": [
                {"valid": false, "answerText": "Vrai"},
                {"valid": true, "answerText": "Faux"}]
        },
        {
            "question": "Les médaillés d’or aux Jeux olympiques ont de fortes chances de remporter la Coupe du monde deux années plus tard.",
            "point": 1,
            "answers": [
                {"valid": false, "answerText": "Vrai"},
                {"valid": true, "answerText": "Faux"}]
        },
    ]
});

