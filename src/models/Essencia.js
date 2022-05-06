const mongoose = require('mongoose');

const EssenciaSchema = new mongoose.Schema({
    titulo: {
        type: String,
        require: true
    },
    descricao:{
        type: String,
        require: true
    },
    foto: {
        type: String,
        require: true
    },
    preco: {
        type: Number,
        require: true
    },
    sabor: {
        type: String,
        require: true
    },
    aroma: {
        type: String,
        require: true
    },
    possuiAroma: {
        type: String,
        require: true
    },
    front: {
        type: String,
        require: true
    },
});

const Essencia = mongoose.model('essencias', EssenciaSchema);

module.exports = Essencia;
