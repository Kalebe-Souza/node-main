const mongoose = require('mongoose')

const ComandaSchema = mongoose.Schema({
    nome: String,
})

const Comanda = mongoose.model('Comanda', ComandaSchema)

module.exports = Comanda