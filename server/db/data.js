db.users.remove({});
db.quizzes.remove({});
db.users.insert(
    {
        "name": "admin",
        "password": "21232f297a57a5a743894a0e4a801fc3"
    });
db.users.insert(
    {
        "name": "antho",
        "password": "741e5e41df8afd89749c9b5780de9f68"
    });
db.users.insert(
    {
        "name": "flo",
        "password": "7e1e91156f7c4e1bd0831cf008ad5fdf"
    });
db.users.insert(
    {
        "name": "jul",
        "password": "f05c8652de134d5c50729fa1b31d355b"
    });

var quiz1 = db.quizzes.insert({
    "name": "La France",
    "logo": "/img/france.jpg",
    "createdBy": "antho",
    "keywords": ["pays", "france"],
    "questionsAndAnswers": [
        {
            "question": "À l’origine, le Louvre était une prison.",
            "point": 1,
            "image": false,
            "answers": [
                {"valid": false, "answerText": "Vrai","image": ""},
                {"valid": true, "answerText": "Faux","image": ""}]
        },
        {
            "question": "Le général de Gaulle a été président de la France avant et après la Seconde Guerre mondiale.",
            "point": 1,
            "image": false,
            "answers": [
                {"valid": false, "answerText": "Vrai","image": ""},
                {"valid": true, "answerText": "Faux","image": ""}]
        },
        {
            "question": "« La drôle de guerre » est la période qui s’est écoulée entre les deux Grandes Guerres.",
            "point": 1,
            "image": false,
            "answers": [
                {"valid": false, "answerText": "Vrai","image": ""},
                {"valid": true, "answerText": "Faux","image": ""}]
        },
    ]
});

var quiz2 = db.quizzes.insert({
    "name": "La Coupe du monde de football",
    "logo": "/img/coupe.jpg",
    "createdBy": "",
    "keywords": ["coupe du monde", "football", "soccer", "cdm", "top"],
    "questionsAndAnswers": [
        {
            "question": "Avec 13 buts, Just Fontaine détient le record du plus grand nombre de buts marqués au cours d’un seul tournoi.",
            "point": 1,
            "image": false,
            "answers": [
                {"valid": true, "answerText": "Vrai","image": ""},
                {"valid": false, "answerText": "Faux","image": ""}]
        },
        {
            "question": "En 2006, Lionel Messi a aidé l’Argentine à remporter la Coupe du monde de football.",
            "point": 1,
            "image": false,
            "answers": [
                {"valid": false, "answerText": "Vrai","image": ""},
                {"valid": true, "answerText": "Faux","image": ""}]
        },
        {
            "question": "Les médaillés d’or aux Jeux olympiques ont de fortes chances de remporter la Coupe du monde deux années plus tard.",
            "point": 1,
            "image": false,
            "answers": [
                {"valid": false, "answerText": "Vrai","image": ""},
                {"valid": true, "answerText": "Faux","image": ""}]
        },
        {
            "question": "Avec quel ballon joue-t-on au football ?",
            "point": 1,
            "image": true,
            "answers": [
                {"valid": false, "answerText": "Vrai","image": "/img/questions/ballon1.jpg"},
                {"valid": true, "answerText": "Faux","image": "/img/questions/ballon2.jpg"}]
        },
    ]
});
