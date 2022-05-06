const mongoose = require('mongoose');

const connectToDatabase = () => {
  mongoose
    .connect('mongodb://127.0.0.1:27017/essencias-db', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB CONNECT!'))
    .catch((error) =>
      console.log(`Erro ao conectar com o MongoDB, erro: ${error}`),
    );
};

module.exports = connectToDatabase;
