import './bootstrap.js';

import * as Sentry from '@sentry/node';
import express, { Application } from 'express';
import 'express-async-errors';
import cors from 'cors';
import helmet from 'helmet';

import exceptionHandler from '@middleware/exceptionHandler';

// start database connection
import './database';

import sentryConfig from '@config/sentry';
import routes from './routes';

class App {
  public server: Application;

  constructor() {
    this.server = express();

    Sentry.init(sentryConfig);

    this.middleware();
    this.routes();
    this.exceptionHandler();
  }

  private middleware(): void {
    this.server.use(Sentry.Handlers.requestHandler());
    this.server.use(helmet());
    this.server.use(cors());
    this.server.use(express.json());
  }

  private routes(): void {
    this.server.use(routes);
    this.server.use(Sentry.Handlers.errorHandler());
  }

  private exceptionHandler(): void {
    this.server.use(exceptionHandler);
  }
}

export default new App().server;
