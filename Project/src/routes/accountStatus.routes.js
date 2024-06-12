// Importación del módulo 'express' para la creación de rutas (URLs)
const Router = require('express');

const { checkAccountState, AcStateRender, ListAccountState } = require('../controllers/accountStatus.controller');

const accStateRouter = Router();

accStateRouter.get('/accountStates', checkAccountState);
accStateRouter.get('/accountStates/:Name', AcStateRender);
accStateRouter.post('/accountStates', ListAccountState);



module.exports = { accStateRouter };