// backend/src/controllers/profesorController.js
const ProfesorModel = require('../models/profesorModel');

class ProfesorController {
  async getProfesores(req, res) {
    try {
      const profesores = await ProfesorModel.getProfesores();
      res.json(profesores);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener profesores', error: error.message });
    }
  }
}

module.exports = new ProfesorController();