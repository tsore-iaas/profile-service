const ressourceService = require('../services/ressourceService');

class RessourceController {
  static async createRessource(req, res) {
    const { profileId } = req.params;
    const { ressourceType, statut, dateExpiration } = req.body;
    try {
      const ressource = await ressourceService.createRessource(profileId, ressourceType, statut, dateExpiration);
      res.status(201).json(ressource);
    } catch (error) {
      res.status(500).send('Erreur lors de la création de l\'ressource');
    }
  }

  static async getRessources(req, res) {
    const { profileId } = req.params;
    try {
      const ressources = await ressourceService.getRessources(profileId);
      res.json(ressources);
    } catch (error) {
      res.status(500).send('Erreur lors de la récupération des ressources');
    }
  }
}

module.exports = RessourceController;
