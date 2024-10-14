// backend/src/routes/profesorRoutes.js
const express = require('express');
const profesorController = require('../controllers/profesorController');

const router = express.Router();

router.get('/', profesorController.getProfesores);

module.exports = router;