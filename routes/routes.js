const express = require('express')
const Produto = require('../models/Produto')
const router = express.Router()

router.get('/', function(req, res){
    res.json({})
})

router.get('/Produtos', async function(req, res){
    res.json( await Produto.find())
})

router.post('/Produtos', async function(req, res){
    res.json( await Produto.create( req.body))
})
router.get('/Produtos/:id', async function(req, res){
    res.json( await Produto.findById(req.params.id))
})
router.delete('/Produtos/:id', async function(req, res){
    res.json( await Produto.findByIdAndDelete(req.params.id))
})
router.put('/Produtos/:id', async function(req, res){
    res.json( await Produto.findByIdAndUpdate(req.params.id, req.body))
})

module.exports = router
