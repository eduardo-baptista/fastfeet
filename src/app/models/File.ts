import { Sequelize, DataTypes } from 'sequelize';

import { ModelImplementation } from '@typings/types';

export interface FileInterface {
  readonly id: number;
  name: string;
  path: string;
  readonly created_at: Date;
  readonly updated_at: Date;
}

class File extends ModelImplementation {
  readonly id!: number;

  name!: string;

  path!: string;

  readonly created_at!: Date;

  readonly updated_at!: Date;

  public static initialize(sequelize: Sequelize): void {
    this.init(
      {
        name: DataTypes.STRING,
        path: DataTypes.STRING,
      },
      { sequelize }
    );
  }
}

export default File;
