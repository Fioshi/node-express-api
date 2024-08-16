const express = require('express');
const route = new express.Router();

const app = express();
//express.json configurar para receber json nos request;
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//incluir rota;
const index = require('./router/index');
app.use('/', index)

module.exports = app;
