import { Model, Sequelize, DataTypes, ModelCtor } from 'sequelize';

import { ModelImplementation } from '@typings/types';

export interface DeliverymanInterface {
  readonly id: number;
  name: string;
  avatar_id: number;
  email: string;
  readonly created_at: Date;
  readonly updated_at: Date;
}

class Deliveryman extends ModelImplementation {
  readonly id!: number;

  name!: string;

  avatar_id!: number;

  email!: string;

  readonly created_at!: Date;

  readonly updated_at!: Date;

  public static initialize(sequelize: Sequelize): void {
    this.init(
      {
        name: DataTypes.STRING,
        avatar_id: DataTypes.INTEGER,
        email: DataTypes.STRING,
      },
      { sequelize, tableName: 'deliverymen' }
    );
  }

  public static associate(models: { [key: string]: ModelCtor<Model> }): void {
    this.belongsTo(models.File, { foreignKey: 'avatar_id', as: 'avatar' });
  }
}

export default Deliveryman;
