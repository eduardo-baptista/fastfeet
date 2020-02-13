import express from 'express';
import 'express-async-errors';

import routes from './routes';

class App {
  constructor() {
    this.server = express();
  }

  middleware() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
