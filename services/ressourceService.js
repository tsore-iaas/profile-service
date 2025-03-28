const RessourceModel = require('../models/ressourceModel');

class RessourceService {
  static async createRessource(profileId, ressourceType, statut, dateExpiration) {
    return await RessourceModel.createRessource(profileId, ressourceType, statut, dateExpiration);
  }

  static async getRessources(profileId) {
    return await RessourceModel.getRessourceByUserId(profileId);
  }
}

module.exports = RessourceService;
