const ProfilService = require('../services/profilService');
const { v4: uuidv4 } = require('uuid');


class ProfilController {
  static async createProfil(req, res) {
    const { user_id, name, email } = req.body;
    const uuid = uuidv4();
    const createdAt = new Date().toISOString();
    try {
      const profil = await ProfilService.createProfil(user_id, name, email, uuid, createdAt);
      res.status(201).json(profil);
    } catch (error) {
      res.status(500).send('Erreur lors de la création du profil');
    }
  }

  static async getProfil(req, res) {
    const { uuid } = req.params;
    try {
      const profil = await ProfilService.getProfil(uuid);
      if (profil) {
        res.json(profil);
      } else {
        res.status(404).send('Profil non trouvé');
      }
    } catch (error) {
      res.status(500).send('Erreur lors de la récupération du profil');
    }
  }

  static async updateProfil(req, res) {
    const { uuid } = req.params;
    const { name, email } = req.body;
    try {
      const updatedProfil = await ProfilService.updateProfil(uuid, name, email);
      res.json(updatedProfil);
    } catch (error) {
      res.status(500).send('Erreur lors de la mise à jour du profil');
    }
  }
}

module.exports = ProfilController;
