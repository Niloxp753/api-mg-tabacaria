const route = require('express').Router();
const controllerEssencias = require('../controllers/essencia.controller');
const controllerCarrinho = require('../controllers/carrinho.controller');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');

const {
  validId,
  validObjectBody,
  validObjectBodyCarrinho,
} = require('../middlewares/essencia.middleware');

route.use('/api-docs', swaggerUi.serve);
route.get('/api-docs', swaggerUi.setup(swaggerDocument));

route.get('/all-essencias', controllerEssencias.findAllEssenciasController);
route.get(
  '/one-essencia/:id',
  validId,
  controllerEssencias.findByIdEssenciaController,
);
route.post(
  '/create-essencia',
  validObjectBody,
  controllerEssencias.createEssenciaController,
);
route.put(
  '/update-essencia/:id',
  validId,
  validObjectBody,
  controllerEssencias.updateEssenciaController,
);
route.delete(
  '/delete-essencia/:id',
  validId,
  controllerEssencias.deleteEssenciaController,
);

route.get('/all-carrinho', controllerCarrinho.findAllCarrinhoController);
route.post(
  '/create-carrinho',validObjectBodyCarrinho,
  controllerCarrinho.createManyItemsCarrinhoController,
);
route.delete(
  '/finish-carrinho',
  controllerCarrinho.deleteAllItemsCarrinhoController,
);

module.exports = route;
