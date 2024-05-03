// Importación del módulo 'express' para la creación de rutas (URLs)
const Router = require('express');

const { root } = require('../controllers/example.controller');

const exRouter = Router();

exRouter.get('/', root);

module.exports = { exRouter };