// Importación del módulo 'express' para la creación de rutas (URLs)
const Router = require('express');

const { root, portalUser, CheckNumberPhone } = require('../controllers/portal.controller');

const portalRouter = Router();

portalRouter.get('/', root);
portalRouter.get('/portal', portalUser);
portalRouter.post('/portal', CheckNumberPhone);


module.exports = { portalRouter };