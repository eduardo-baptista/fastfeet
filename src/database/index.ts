import { Model, Sequelize, Options } from 'sequelize';

import databaseConfig from '@config/database';

const models: Model[] = [];

class DataBase {
  private connection: Sequelize;

  constructor() {
    this.init();
  }

  init(): void {
    this.connection = new Sequelize(databaseConfig as Options);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new DataBase();
