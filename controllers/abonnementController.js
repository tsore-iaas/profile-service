const AbonnementService = require('../services/abonnementService');

class AbonnementController {
  static async createAbonnement(req, res) {
    const { profileId } = req.params;
    const { abonnementType, statut, dateExpiration } = req.body;
    try {
      const abonnement = await AbonnementService.createAbonnement(profileId, abonnementType, statut, dateExpiration);
      res.status(201).json(abonnement);
    } catch (error) {
      res.status(500).send('Erreur lors de la création de l\'abonnement');
    }
  }

  static async getAbonnements(req, res) {
    const { profileId } = req.params;
    try {
      const abonnements = await AbonnementService.getAbonnements(profileId);
      res.json(abonnements);
    } catch (error) {
      res.status(500).send('Erreur lors de la récupération des abonnements');
    }
  }
}

module.exports = AbonnementController;
