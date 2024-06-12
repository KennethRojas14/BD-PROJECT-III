// Importación del módulo 'express' para la creación de rutas (URLs)
const Router = require('express');

const { checkAccountState, AcStateRender, ListAccountState } = require('../controllers/accountStatus.controller');

const portalRouter = Router();

portalRouter.get('/accountStates', checkAccountState);
portalRouter.get('/accountStates', AcStateRender);
portalRouter.post('/accountStates', ListAccountState);



module.exports = { portalRouter };