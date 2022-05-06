const route = require('express').Router();
const controllerEssencias = require('../controllers/essencia.controller');
const {
  validId,
  validObjectBody,
} = require('../middlewares/essencia.middleware');

route.get('/all-essencias', controllerEssencias.findAllEssenciasController);
route.get(
  '/one-essencia/:id',
  validId,
  controllerEssencias.findByIdEssenciaController,
);
route.post(
  '/create',
  validObjectBody,
  controllerEssencias.createEssenciaController,
);
route.put(
  '/update/:id',
  validId,
  validObjectBody,
  controllerEssencias.updateEssenciaController,
);
route.delete(
  '/delete/:id',
  validId,
  controllerEssencias.deleteEssenciaController,
);

module.exports = route;
