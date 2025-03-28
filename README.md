# Microservice Profil
Ce projet est un microservice Profil.

## Table des matières

- Prérequis
- Installation
- Utilisation
- Structure du projet
- API Endpoints
- Environnement
- Technologies utilisées
- Contribuer
- Licence


## Prérequis
Avant d'exécuter ce microservice, assurez-vous d'avoir installé et configuré les éléments suivants :

- Node.js (version 14 ou supérieure)
- Neo4j (ou un autre service de base de données compatible, mais ce microservice utilise Neo4j)
- npm (gestionnaire de paquets Node.js)
- Configuration de Neo4j
Pour utiliser Neo4j, vous devez configurer les variables suivantes dans votre fichier .env (voir plus bas).

## Installation

* Clonez le projet sur votre machine locale :

````bash
Copier
git clone https://github.com/ton-organisation/microservice-profil.git
cd microservice-profil
````
* Installez les dépendances du projet :

````bash
Copier
npm install
````

* Créez un fichier .env à la racine du projet et ajoutez-y vos informations de connexion à Neo4j :

````env
NEO4J_URI=bolt://localhost:7687
NEO4J_USER=neo4j
NEO4J_PASSWORD=password
PORT=5000
````

* Lancer le microservice :

````bash
Copier
npm start
````
Le serveur sera disponible à l'adresse http://localhost:5000.

## Utilisation
Ce microservice fournit une API REST pour gérer les profils des utilisateurs, les abonnements et d'autres informations associées. Vous pouvez utiliser des outils comme Postman ou cURL pour tester l'API.

<u>Exemple de requêtes API</u>

- Créer un profil utilisateur

Méthode : POST
URL : /api/profil
Body :
````json
{
  "id": "12345",
  "name": "John Doe",
  "email": "john.doe@example.com"
}
````
Réponse (exemple) :

````json
{
  "id": "12345",
  "name": "John Doe",
  "email": "john.doe@example.com"
}
````

- Récupérer le profil utilisateur

Méthode : GET
URL : /api/profil/12345
Réponse (exemple) :

````json

{
  "id": "12345",
  "name": "John Doe",
  "email": "john.doe@example.com"
}
````

- Mettre à jour un profil utilisateur

Méthode : PUT
URL : /api/profil/12345
Body :

````json
{
  "name": "John D.",
  "email": "john.d@example.com"
}
````

Réponse (exemple) :

````json
{
  "id": "12345",
  "name": "John D.",
  "email": "john.d@example.com"
}
````



## Structure du projet
Voici l'organisation du code :

````bash

profil-microservice/
│
├── config/                # Configuration de la connexion à la base de données Neo4j
├── controllers/           # Logique de gestion des requêtes API
├── models/                # Gestion des données avec la base de données
├── routes/                # Définition des routes de l'API
├── services/              # Logique métier du service Profil
├── .env                   # Variables d'environnement
├── server.js              # Point d'entrée du serveur Express
└── README.md              # Documentation du projet
````

## API Endpoints

- Profil Utilisateur

* POST /api/profil : Créer un profil utilisateur
* GET /api/profil/:id : Récupérer le profil d'un utilisateur par ID
* PUT /api/profil/:id : Mettre à jour un profil utilisateur


## Environnement
Le projet utilise un fichier .env pour stocker les informations sensibles, telles que les informations de connexion à la base de données Neo4j et le port d'exécution du serveur. Voici un exemple de fichier .env :

````env
NEO4J_URI=bolt://localhost:7687
NEO4J_USER=neo4j
NEO4J_PASSWORD=password
PORT=5000
`````

## Technologies utilisées

- Node.js : Environnement d'exécution JavaScript côté serveur
- Express : Framework web pour Node.js
- Neo4j : Base de données orientée graphes pour stocker les profils et les abonnements
- dotenv : Gestion des variables d'environnement
- JWT : Pour l'authentification des utilisateurs (si nécessaire)
- Postman/cURL : Outils pour tester l'API

## Contribuer

Si tu souhaites contribuer à ce projet, n'hésite pas à faire un fork, puis à soumettre une pull request. Assure-toi de respecter les bonnes pratiques de développement et d'écrire des tests pour les nouvelles fonctionnalités.

## Licence
Ce projet est sous licence MIT. Consulte le fichier LICENSE pour plus de détails.