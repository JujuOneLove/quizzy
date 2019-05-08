//use exple1
db.users.remove({});
db.quizzes.remove({});
db.users.insert(
    {
        "name": "admin",
        "password": "admin"
    });
db.users.insert(
    {
        "name": "antho",
        "password": "antho"
    });
db.users.insert(
    {
        "name": "flo",
        "password": "flo"
    });
db.users.insert(
    {
        "name": "jul",
        "password": "jul"
    });
var user2 = db.users.findOne({"user" : "antho"});

var quiz1 = db.quizzes.insert({
    "name": "La France",
    "logo": "/img/france.jpg",
    "createdBy": user2,
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
    "logo": "/img/coupe.jpg",
    "createdBy": user2,
    "keywords": ["coupe du monde", "football", "soccer", "cdm", "top"],
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
