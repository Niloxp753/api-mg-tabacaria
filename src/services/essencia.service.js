const Essencias = require('../models/Essencia');

const findAllEssenciasService = async () => {
  const essencias = await Essencias.find();
  return essencias;
};

const findByIdEssenciaService = async (idParam) => {
  const essencia = await Essencias.findById(idParam);
  return essencia;
};

const createEssenciaService = async (newEssencia) => {
  const essenciaCreated = await Essencias.create(newEssencia);
  return essenciaCreated;
};

const updateEssenciaService = async (id, essenciaEdit) => {
  const essenciaUpdate = await Essencias.findByIdAndUpdate(id, essenciaEdit);
  return essenciaUpdate;
};

const deleteEssenciaService = async (id) => {
  return await Essencias.findByIdAndDelete(id);
};

module.exports = {
  findAllEssenciasService,
  findByIdEssenciaService,
  createEssenciaService,
  updateEssenciaService,
  deleteEssenciaService,
};
