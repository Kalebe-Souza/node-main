const mongoose = require('mongoose')

const FuncionarioSchema = mongoose.Schema({
    nome: String,
})

const Funcionario = mongoose.model('Funcionario', FuncionarioSchema)

module.exports = Funcionario