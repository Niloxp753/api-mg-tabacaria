const mongoose = require('mongoose');

const connectToDatabase = () => {
  mongoose
    .connect('mongodb+srv://root:admin@api-mgtabacaria.pnnku.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB CONNECT!'))
    .catch((error) =>
      console.log(`Erro ao conectar com o MongoDB, erro: ${error}`),
    );
};

module.exports = connectToDatabase;
