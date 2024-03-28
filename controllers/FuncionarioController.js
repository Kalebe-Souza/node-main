const {json} = require("express");
const Funcionario = require("../models/Funcionario")

const FuncionarioController = {
  getALL: async (req, res ) => {
    res.json( await Funcionario.find())
  },

  get: async (req, res ) => {


    try {
        res.json( await Funcionario.findById(req.params.id))
        
    } catch (error) {
        res.status(404).json({error: 'Não achei essa merda'})
    }
  },

  create: async (req, res ) => {
      try {
          
          res.json( await Funcionario.create( req.body))
        
    } catch (error) {
        res.status(404).json({error})
    }
  },

  update: async (req, res ) => {
      try {
          
          res.json( await Funcionario.findByIdAndUpdate(req.params.id, req.body))
        
    } catch (error) {
        res.status(404).json({error: 'Não achei essa merda'})
    }
  },

  delete: async (req, res ) => {
      try {
          res.json( await Funcionario.findByIdAndDelete(req.params.id))
          
    } catch (error) {
        res.status(404).json({error: 'Não achei essa merda'})
    }
  },


}

module.exports = FuncionarioController;