const AbonnementModel = require('../models/abonnementModel');

class AbonnementService {
  static async createAbonnement(profileId, abonnementType, statut, dateExpiration) {
    return await AbonnementModel.createAbonnement(profileId, abonnementType, statut, dateExpiration);
  }

  static async getAbonnements(profileId) {
    return await AbonnementModel.getAbonnementByUserId(profileId);
  }
}

module.exports = AbonnementService;
