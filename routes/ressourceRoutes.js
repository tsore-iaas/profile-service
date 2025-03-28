/**
 * @swagger
 * /api/profil/{profileId}/ressource:
 *   post:
 *     summary: Créer un ressource pour un utilisateur
 *     description: Crée un ressource pour un utilisateur donné, avec le type d'ressource et la date d'expiration.
 *     operationId: createressource
 *     parameters:
 *       - name: profileId
 *         in: path
 *         description: ID du profile pour lequel créer l'ressource
 *         required: true
 *         schema:
 *           type: string
 *           example: "26e2db1f-911b-4e15-86c1-80199764eb0a"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ressourceType:
 *                 type: string
 *                 example: "premium"
 *               statut:
 *                 type: string
 *                 example: "actif"
 *               dateExpiration:
 *                 type: string
 *                 format: date
 *                 example: "2025-12-31"
 *     responses:
 *       201:
 *         description: ressource créé avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 type:
 *                   type: string
 *                 statut:
 *                   type: string
 *                 dateExpiration:
 *                   type: string
 *       400:
 *         description: Requête invalide
 *       404:
 *         description: Utilisateur non trouvé
 *       500:
 *         description: Erreur interne du serveur
 */

/**
 * @swagger
 * /api/profil/{profileId}/ressource:
 *   get:
 *     summary: Récupérer les ressources d'un profil d'utilisateur
 *     description: Récupère tous les ressources actifs et expirés d'un utilisateur donné par son ID.
 *     operationId: getressources
 *     parameters:
 *       - name: profileId
 *         in: path
 *         description: ID du profile dont on souhaite obtenir les ressources
 *         required: true
 *         schema:
 *           type: string
 *           example: "26e2db1f-911b-4e15-86c1-80199764eb0a"
 *     responses:
 *       200:
 *         description: Liste des ressources de l'utilisateur
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   ressourceType:
 *                     type: string
 *                   statut:
 *                     type: string
 *                   dateExpiration:
 *                     type: string
 *       404:
 *         description: Utilisateur non trouvé
 *       500:
 *         description: Erreur interne du serveur
 */

const express = require('express');
const RessourceController = require('../controllers/ressourceController');
const router = express.Router();

router.post('/api/profil/:profileId/ressource', RessourceController.createRessource);
router.get('/api/profil/:profileId/ressource', RessourceController.getRessources);

module.exports = router;
