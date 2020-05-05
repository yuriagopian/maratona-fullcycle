const express = require('express')


const routes = express.Router();

routes.get('/', (req,res)=>{
    res.send('Maratona Full Cycle 2.0')
})

module.exports = routes;