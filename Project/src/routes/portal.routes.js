// Importación del módulo 'express' para la creación de rutas (URLs)
const Router = require('express');

const { root, portal } = require('../controllers/portal.controller');

const portalRouter = Router();

portalRouter.get('/', root);
portalRouter.get('/portal', portal);

module.exports = { portalRouter };