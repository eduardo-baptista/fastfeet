import { Sequelize, Options } from 'sequelize';

import databaseConfig from '@config/database';

// models
import User from '@models/User';
import Recipient from '@models/Recipient';

const models = [User, Recipient];

class DataBase {
  public connection: Sequelize;

  constructor() {
    this.init();
  }

  init(): void {
    this.connection = new Sequelize(databaseConfig as Options);

    models.map(model => model.initialize(this.connection));
    // .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new DataBase();
