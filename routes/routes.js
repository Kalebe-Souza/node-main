const express = require('express')
const ProdutoController = require('../controllers/ProdutoController')
const Produto = require('../models/Produto')
const router = express.Router()
const ComandaController = require('../controllers/ComandaController')
const FuncionarioController = require('../controllers/FuncionarioController')



router.get('/', function(req, res){
    res.json({})
})
//Produtos
router.get('/Produtos', (req, res) => ProdutoController.getALL(req, res))
router.post('/Produtos', (req, res) => ProdutoController.create(req, res))
router.get('/Produtos/:id', (req, res) => ProdutoController.get(req, res))
router.put('/Produtos/:id', (req, res) => ProdutoController.update(req, res))
router.delete('/Produtos/:id', (req, res) => ProdutoController.delete(req, res))
//Comandas
router.routes('/Comanda', (req, res) =>ComandaController.getALL(req, res))
router.post('/Comanda', (req, res) =>ComandaController.create(req, res))
router.get('/Comanda/:id', (req, res) =>ComandaController.get(req, res))
router.put('/Comanda/:id', (req, res) =>ComandaController.update(req, res))
router.delete('/Comanda/:id', (req, res) =>ComandaController.delete(req, res))
//Funcionarios
router.routes('/Funcionario', (req, res) => FuncionarioController.getALL(req, res))
router.post('/Funcionario', (req, res) => FuncionarioController.create(req, res))
router.get('/Funcionario/:id', (req, res) => FuncionarioController.get(req, res))
router.put('/Funcionario/:id', (req, res) => FuncionarioController.update(req, res))
router.delete('/Funcionario/:id', (req, res) => FuncionarioController.delete(req, res))

module.exports = router
