const mongoose = require('mongoose');

const validId = (req, res, next) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id inválido!' });
  }
  next();
};

const validObjectBody = (req, res, next) => {
  const essencia = req.body;

  if (
    !essencia ||
    !essencia.titulo ||
    !essencia.descricao ||
    !essencia.foto ||
    !essencia.preco ||
    !essencia.sabor ||
    !essencia.front
  ) {
    return res
      .status(400)
      .send({ message: 'Envie todos os campos informados!' });
  }
  next();
};

const validObjectBodyCarrinho = (req, res, next) => {
  const carrinho = req.body;

  carrinho.forEach((item) => {
    if (!item || !item.essenciaId || !item.quantidade) {
      return res
        .status(400)
        .send({ message: 'Envie todos os campos informados!' });
    }
  });

  next();
};

module.exports = {
  validId,
  validObjectBody,
  validObjectBodyCarrinho,
};
