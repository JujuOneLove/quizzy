![alt text](https://administration.julienvanroy.fr/wp-content/uploads/2019/05/logo.png)
# Projet M.E.R.N

Quizzy est une application web (les parties client et serveur) qui permet de concevoir des quiz et bien sur de jouer.

## Fonctionnalités

- Affiche la liste de tous les quiz (nom et icône).
- Affiche la liste des quiz correspondant à un ou plusieurs mots-clés.
- Permet à un joueur non identifié de jouer à un quiz.
- Permet à un joueur non identifié de créer un quiz.
- Gére les propositions de réponses données par un texte.
- Gére les propositions de réponses données par une image.
- Calcule et afficher le score d'un joueur en fin de partie.
- Gére l'identification et l'authentification des joueurs. Dans ce cas, modifier les droits de création de quiz, mémoriser les scores, etc.
- Gére les statistiques des quiz : nombre de fois où ils ont été joués, score moyen, meilleur score, etc...

## Tests

L'application propose des tests unitaires automatisés . (Client & Serveur)

## Design

Il n'y a pas de contraintes obligatoires sur le design. 
Mise en place d'un style "mobile first".

## Gestion de votre projet

Il nous était demandé de bien préparer le projet en amont des développements et d’en assurer le suivi tout au long des trois jours.

### Préparation du projet

Avant de nous lancer dans la réalisation de notre code, nous devions :

- Découper le projet en tâches.
- Estimer la charge de chaque tâche.
- Ordonnancer les tâches.
- Partager notre code

### Suivi au quotidien sur Trello.com

- Découpage / Identification.
- Deadlines.
- Répartition.
- Suivi d’avancement.
- Présentation de la gestion du projet

## Scripts package.json

Dans le répertoire du projet, vous pouvez exécuter:

### `npm start`

Client : [http://localhost:3000](http://localhost:3000)

### `npm server`

Server : [http://localhost:8081](http://localhost:8081)

### `npm test`

Test Component

### `npm mocha`

Test Server

### `npm resetDB`

Reset Data MondoDB
