const express = require('express')
const ProdutoController = require('../controllers/ProdutoController')
const Produto = require('../models/Produto')
const router = express.Router()
const ComandaController = require('../controllers/ComandaController')
const FuncionarioController = require('../controllers/FuncionarioController')
const ClienteController = require('../controllers/ClienteController')



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
router.get('/Comanda', (req, res) => ComandaController.getALL(req, res))
router.post('/Comanda', (req, res) =>ComandaController.create(req, res))
router.get('/Comanda/:id', (req, res) =>ComandaController.get(req, res))
router.put('/Comanda/:id', (req, res) =>ComandaController.update(req, res))
router.delete('/Comanda/:id', (req, res) =>ComandaController.delete(req, res))
//Funcionarios
router.get('/Funcionario', (req, res) => FuncionarioController.getALL(req, res))
router.post('/Funcionario', (req, res) => FuncionarioController.create(req, res))
router.get('/Funcionario/:id', (req, res) => FuncionarioController.get(req, res))
router.put('/Funcionario/:id', (req, res) => FuncionarioController.update(req, res))
router.delete('/Funcionario/:id', (req, res) => FuncionarioController.delete(req, res))

//Clientes
router.get('/Cliente', (req, res) => ClienteController.getALL(req, res))
router.post('/Cliente', (req, res) => ClienteController.create(req, res))
router.get('/Cliente/:id', (req, res) => ClienteController.get(req, res))
router.put('/Cliente/:id', (req, res) => ClienteController.update(req, res))
router.delete('/Cliente/:id', (req, res) => ClienteController.delete(req, res))

module.exports = router
