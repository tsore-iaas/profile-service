const swaggerJsdoc = require('swagger-jsdoc');

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Profil',
      version: '1.0.0',
      description: 'Microservice Profil pour un site de e-commerce de type adhesion pour la vente d\'abonnement pour des plateformes de streaming',
    },
    servers: [
      {
        url: 'http://localhost:5000',
      },
    ],
  },
  apis: ['./routes/*.js', './controllers/*.js'],  
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

module.exports = swaggerSpec;
