const mongoose = require('mongoose');

let PersonSchema = new mongoose.Schema({
    nome: String,
    dataNascimento: Date,
    email: String,
    telefoneRedidencial: String,
    telefoneCelular: String,
    sexo: Boolean,
    tipoDeficiencia: {
        fisica: Boolean,
        auditiva: Boolean,
        visual: Boolean,
        mental: Boolean
    },
    detalhesDeficiencia: String,
    endereco: String,
    cidade: String,
    cep: String,
    detalhesCurriculo: String,
    areaAtuacao: String,
    picture: String
});

module.exports = mongoose.model('Person', PersonSchema);