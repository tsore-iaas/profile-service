const ProfilModel = require('../models/profilModel');

class ProfilService {
  static async createProfil(user_id, name, email, uuid) {
    return await ProfilModel.createProfil(user_id, name, email, uuid);
  }

  static async getProfil(uuid) {
    return await ProfilModel.getProfilById(uuid);
  }

  static async updateProfil(uuid, name, email) {
    return await ProfilModel.updateProfil(uuid, name, email);
  }
}

module.exports = ProfilService;
