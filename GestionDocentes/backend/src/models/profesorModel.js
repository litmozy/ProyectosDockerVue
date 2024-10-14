// backend/src/models/profesorModel.js
const db = require('../config/database');

class ProfesorModel {
  static async getProfesores() {
    const [rows] = await db.execute('SELECT nombre FROM profesores');
    return rows;
  }
}

module.exports = ProfesorModel;