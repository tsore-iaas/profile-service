const { session } = require('../config/db');

class ressourceModel {
  static async createRessource(profileId, ressourceType, statut, dateExpiration) {
    const result = await session.run(
      'MATCH (u:Utilisateur {uuid: $profileId}) ' +
      'CREATE (u)-[:A_UNE_RESSOURCE]->(a:Ressource {type: $ressourceType, statut: $statut, dateExpiration: $dateExpiration}) ' +
      'RETURN a',
      { profileId, ressourceType, statut, dateExpiration }
    );
    return result.records[0].get('a').properties;
  }

  static async getRessourceByUserId(profileId) {
    const result = await session.run(
      'MATCH (u:Utilisateur {uuid: $profileId})-[:A_UNE_RESSOURCE]->(a:Ressource) RETURN a',
      { profileId }
    );
    return result.records.map(record => record.get('a').properties);
  }
}

module.exports = ressourceModel;
