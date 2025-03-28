/**
 * @swagger
 * /api/profil:
 *   post:
 *     summary: Créer un profil utilisateur
 *     description: Crée un profil utilisateur avec un ID, un nom et un email.
 *     operationId: createProfil
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user_id:
 *                 type: string
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       201:
 *         description: Profil créé avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user_id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 uuid:
 *                   type: string
 *                 email:
 *                   type: string
 *       500:
 *         description: Erreur serveur interne
 */

/**
 * @swagger
 * /api/profil/{uuid}:
 *    get:
 *     summary: Récupérer un profil utilisateur
 *     description: Récupère les informations d'un profil utilisateur avec l'ID spécifié.
 *     operationId: getProfil
 *     parameters:
 *       - name: uuid
 *         in: path
 *         required: true
 *         description: L'ID unique du profil
 *         schema:
 *           type: string
 *           example: "26e2db1f-911b-4e15-86c1-80199764eb0a"
 *     responses:
 *       200:
 *         description: Profil trouvé et retourné avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user_id:
 *                   type: string
 *                   description: L'ID de l'utilisateur
 *                   example: "12345"
 *                 uuid:
 *                   type: string
 *                   description: UUID unique du profil
 *                   example: "7d2b6f08-4f7f-40c5-b62f-6fa4c2f4700f"
 *                 name:
 *                   type: string
 *                   description: Le nom de l'utilisateur
 *                   example: "John Doe"
 *                 email:
 *                   type: string
 *                   description: L'adresse email de l'utilisateur
 *                   example: "john.doe@example.com"
 *       404:
 *         description: Profil non trouvé
 *       500:
 *         description: Erreur interne du serveur
 */

/**
 * @swagger
 * /api/profil/{uuid}:
 *   put:
 *     summary: Mettre à jour un profil utilisateur
 *     description: Met à jour les informations d'un profil utilisateur existant avec l'ID spécifié.
 *     operationId: updateProfil
 *     parameters:
 *       - name: uuid
 *         in: path
 *         required: true
 *         description: L'ID unique du profil
 *         schema:
 *           type: string
 *           example: "12345"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Le nom de l'utilisateur
 *                 example: "Johnathan Doe"
 *               email:
 *                 type: string
 *                 description: L'adresse email de l'utilisateur
 *                 example: "johnathan.doe@example.com"
 *     responses:
 *       200:
 *         description: Profil mis à jour avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user_id:
 *                   type: string
 *                   description: L'ID de l'utilisateur
 *                   example: "12345"
 *                 name:
 *                   type: string
 *                   description: Le nom mis à jour de l'utilisateur
 *                   example: "Johnathan Doe"
 *                 uuid:
 *                   type: string
 *                   description: UUID unique du profil
 *                   example: "7d2b6f08-4f7f-40c5-b62f-6fa4c2f4700f"
 *                 email:
 *                   type: string
 *                   description: L'email mis à jour de l'utilisateur
 *                   example: "johnathan.doe@example.com"
 *       400:
 *         description: Requête invalide, paramètres manquants ou malformés
 *       404:
 *         description: Profil non trouvé
 *       500:
 *         description: Erreur interne du serveur
 */

const express = require('express');
const ProfilController = require('../controllers/profilController');
const router = express.Router();

router.get('/api/profil/:uuid', ProfilController.getProfil);
router.put('/api/profil/:uuid', ProfilController.updateProfil);
router.post('/api/profil', ProfilController.createProfil);

module.exports = router;
