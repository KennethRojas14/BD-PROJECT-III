// Importación del módulo 'express' para la creación de rutas (URLs)
const Router = require('express');

const { root } = require('../controllers/portal.controller');

const portalRouter = Router();

portalRouter.get('/', root);

module.exports = { portalRouter };