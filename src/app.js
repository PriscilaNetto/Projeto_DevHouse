import express from 'express';
import routes from './routes';

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

export default new App().server
