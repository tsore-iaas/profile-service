/**
 * @swagger
 * /api/profil/{profileId}/abonnement:
 *   post:
 *     summary: Créer un abonnement pour un utilisateur
 *     description: Crée un abonnement pour un utilisateur donné, avec le type d'abonnement et la date d'expiration.
 *     operationId: createAbonnement
 *     parameters:
 *       - name: profileId
 *         in: path
 *         description: ID du profile pour lequel créer l'abonnement
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
 *               abonnementType:
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
 *         description: Abonnement créé avec succès
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
 * /api/profil/{profileId}/abonnement:
 *   get:
 *     summary: Récupérer les abonnements d'un profil d'utilisateur
 *     description: Récupère tous les abonnements actifs et expirés d'un utilisateur donné par son ID.
 *     operationId: getAbonnements
 *     parameters:
 *       - name: profileId
 *         in: path
 *         description: ID du profile dont on souhaite obtenir les abonnements
 *         required: true
 *         schema:
 *           type: string
 *           example: "26e2db1f-911b-4e15-86c1-80199764eb0a"
 *     responses:
 *       200:
 *         description: Liste des abonnements de l'utilisateur
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   abonnementType:
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
const AbonnementController = require('../controllers/abonnementController');
const router = express.Router();

router.post('/api/profil/:profileId/abonnement', AbonnementController.createAbonnement);
router.get('/api/profil/:profileId/abonnement', AbonnementController.getAbonnements);

module.exports = router;
