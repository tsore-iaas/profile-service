const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swaggerConfig');
const profilRoutes = require('./routes/profilRoutes');
const ressourceRoutes = require('./routes/ressourceRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(profilRoutes);
app.use(ressourceRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Le serveur est démarré sur le port ${PORT}`);
});
