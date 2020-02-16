import './bootstrap.js';

import express, { Application } from 'express';
import 'express-async-errors';

// start database connection
import './database';

import routes from './routes';

class App {
  public server: Application;

  constructor() {
    this.server = express();

    this.middleware();
    this.routes();
  }

  middleware(): void {
    this.server.use(express.json());
  }

  routes(): void {
    this.server.use(routes);
  }
}

export default new App().server;
