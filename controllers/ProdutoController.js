const Produto = require("../models/Produto")

const ProdutoController = {
  getALL: async (req, res ) => {
    res.json( await Produto.find())
  },

  get: async (req, res ) => {


    try {
        res.json( await Produto.findById(req.params.id))
        
    } catch (error) {
        res.status(404).json({error: 'Não achei essa merda'})
    }
  },

  create: async (req, res ) => {
      try {
          
          res.json( await Produto.create( req.body))
        
    } catch (error) {
        res.status(404).json({error})
    }
  },

  update: async (req, res ) => {
      try {
          
          res.json( await Produto.findByIdAndUpdate(req.params.id, req.body))
        
    } catch (error) {
        res.status(404).json({error: 'Não achei essa merda'})
    }
  },

  delete: async (req, res ) => {
      try {
          res.json( await Produto.findByIdAndDelete(req.params.id))
          
    } catch (error) {
        res.status(404).json({error: 'Não achei essa merda'})
    }
  },


}

module.exports = ProdutoController;