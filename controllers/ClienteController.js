const {json} = require("express");
const Cliente = require("../models/Cliente")

const ClienteController = {
  getALL: async (req, res ) => {
    res.json( await Cliente.find())
  },

  get: async (req, res ) => {


    try {
        res.json( await Cliente.findById(req.params.id))
        
    } catch (error) {
        res.status(404).json({error: 'Não achei essa merda'})
    }
  },

  create: async (req, res ) => {
      try {
          
          res.json( await Cliente.create( req.body))
        
    } catch (error) {
        res.status(404).json({error})
    }
  },

  update: async (req, res ) => {
      try {
          
          res.json( await Cliente.findByIdAndUpdate(req.params.id, req.body))
        
    } catch (error) {
        res.status(404).json({error: 'Não achei essa merda'})
    }
  },

  delete: async (req, res ) => {
      try {
          res.json( await Cliente.findByIdAndDelete(req.params.id))
          
    } catch (error) {
        res.status(404).json({error: 'Não achei essa merda'})
    }
  },


}

module.exports = ClienteController;