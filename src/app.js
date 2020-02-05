const express = require('express');
const routes = require('./routes');

class App{

  constructor(){
    this.server = express(); //this é referente a class App.

    this.middlewares();
    this.routes();
  }
  middlewares(){
    this.server.use(express.json());
  }

  routes(){
    this.server.use(routes);

  }

}

module.exports = new App().server
