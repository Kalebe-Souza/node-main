const mongoose = require('mongoose')

async function main(){

    

    try {
        await mongoose.connect(process.env.API)
        console.log('Banco OK');
    } catch (error) {
        console.log('Erro: ' + error);
    }

}

module.exports = main