const { session } = require('../config/db');

class AbonnementModel {
  static async createAbonnement(profileId, abonnementType, statut, dateExpiration) {
    const result = await session.run(
      'MATCH (u:Utilisateur {uuid: $profileId}) ' +
      'CREATE (u)-[:A_UN_ABONNEMENT]->(a:Abonnement {type: $abonnementType, statut: $statut, dateExpiration: $dateExpiration}) ' +
      'RETURN a',
      { profileId, abonnementType, statut, dateExpiration }
    );
    return result.records[0].get('a').properties;
  }

  static async getAbonnementByUserId(profileId) {
    const result = await session.run(
      'MATCH (u:Utilisateur {uuid: $profileId})-[:A_UN_ABONNEMENT]->(a:Abonnement) RETURN a',
      { profileId }
    );
    return result.records.map(record => record.get('a').properties);
  }
}

module.exports = AbonnementModel;
