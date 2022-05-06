const essenciasService = require('../services/essencia.service');
const mongoose = require('mongoose');

const findAllEssenciasController = async (req, res) => {
  const essencias = await essenciasService.findAllEssenciasService();
  if (essencias.lenght == 0) {
    return res
      .status(404)
      .send({ message: 'Não existe nenhuma essencia cadastrada!' });
  }
  res.send(essencias);
};

const findByIdEssenciaController = async (req, res) => {
  const idParam = req.params.id;
  const chosenEssencia = await essenciasService.findByIdEssenciaService(
    idParam,
  );
  if (!chosenEssencia) {
    return res.status(404).send({ message: 'Essencia não encontrada!' });
  }
  res.send(chosenEssencia);
};

const createEssenciaController = async (req, res) => {
  const essencia = req.body;
  const newEssencia = await essenciasService.createEssenciaService(essencia);
  res.status(201).send(newEssencia);
};

const updateEssenciaController = async (req, res) => {
  const idParam = req.params.id;
  const essenciaEdit = req.body;
  const updatedEssencia = await essenciasService.updateEssenciaService(
    idParam,
    essenciaEdit,
  );
  res.send(updatedEssencia);
};

const deleteEssenciaController = async (req, res) => {
  const idParam = req.params.id;
  await essenciasService.deleteEssenciaService(idParam);
  res.send({ message: 'Essencia deletada com sucesso!' });
};

module.exports = {
  findAllEssenciasController,
  findByIdEssenciaController,
  createEssenciaController,
  updateEssenciaController,
  deleteEssenciaController,
};
