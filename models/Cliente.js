const mongoose = require('mongoose')

const ClienteSchema = mongoose.Schema({
    nome: String,
})

const Cliente = mongoose.model('Cliente', ClienteSchema)

module.exports = Cliente