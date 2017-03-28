const router = require('express').Router();
const moment = require('moment');
const db = require('../server/database');
const Person = require('../models/person');

function create(req, res) {
    let person = new Person();
    person.nome = req.body.nome;
    person.dataNascimento = moment(req.body.dataNascimento, 'DD/MM/YYYY').toDate();
    person.email = req.body.email;
    person.telefoneResidencial = req.body.telefoneResidencial;
    person.telefoneCelular = req.body.telefoneCelular;
    person.sexo = req.body.sexo;
    person.tipoDeficiencia = req.body.tipoDeficiencia;
    person.detalhesDeficiencia = req.body.detalhesDeficiencia;
    person.endereco = req.body.endereco;
    person.cidade = req.body.cidade;
    person.cep = req.body.cep;
    person.detalhesCurriculo = req.body.detalhesCurriculo;
    person.areaAtuacao = req.body.areaAtuacao;

    person.save().then(function save(err) {
        if (err) res.send(err);

        res.json({
            time: new Date().toISOString(),
            person
        });
    });
}

function retrieveAll(req, res) {
    Person.find().then(function find(err, persons) {
        if (err) res.send(err);

        res.json(persons);
    });
}

function retrieveById(req, res) {
    Person.findById(req.params.id).then(function findById(err, person) {
        if (err) res.send(err);

        res.json(person);
    });
}

function update(req, res) {
    Person.findById(req.params.id).then(function findById(err, person) {
        if (err) res.send(err);

        person.nome = req.body.nome;
        person.dataNascimento = req.body.dataNascimento;
        person.email = req.body.email;
        person.telefoneResidencial = req.body.telefoneResidencial;
        person.telefoneCelular = req.body.telefoneCelular;
        person.sexo = req.body.sexo;
        person.tipoDeficiencia = req.body.tipoDeficiencia;
        person.detalhesDeficiencia = req.body.detalhesDeficiencia;
        person.endereco = req.body.endereco;
        person.cidade = req.body.cidade;
        person.cep = req.body.cep;
        person.detalhesCurriculo = req.body.detalhesCurriculo;
        person.areaAtuacao = req.body.areaAtuacao;

        person.save(function save(err) {
            if (err) res.send(err);

            res.json({
                time: new Date(),
                person
            });
        });
    });
}

function remove(req, res) {
    Person.remove({
        _id: req.params.id
    }).then(function remove(err, person) {
        if (err) res.send(err);

        res.json({ person });
    });
}

router.route('/')
    .get(retrieveAll)
    .post(create);

router.route('/:id')
    .get(retrieveById)
    .patch(update)
    .delete(remove);

module.exports = router;