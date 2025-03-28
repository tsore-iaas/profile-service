const { session } = require('../config/db');

class ProfilModel {
  static async createProfil(user_id, name, email, uuid) {
    const result = await session.run(
      'CREATE (u:Utilisateur {user_id: $user_id, name: $name, email: $email, uuid: $uuid}) RETURN u',
      { user_id, name, email, uuid }
    );
    return result.records[0].get('u').properties;
  }

  static async getProfilById(uuid) {
    const result = await session.run(
      'MATCH (u:Utilisateur {uuid: $uuid}) RETURN u',
      { uuid }
    );
    if (result.records.length > 0) {
      return result.records[0].get('u').properties;
    }
    return null;
  }

  static async updateProfil(uuid, name, email) {
    const result = await session.run(
      'MATCH (u:Utilisateur {uuid: $uuid}) SET u.name = $name, u.email = $email RETURN u',
      { uuid, name, email }
    );
    return result.records[0].get('u').properties;
  }
}

module.exports = ProfilModel;
