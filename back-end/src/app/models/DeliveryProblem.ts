import { Model, Sequelize, DataTypes, ModelCtor } from 'sequelize';

import { ModelImplementation } from '@typings/types';

import Order from '@models/Order';

export interface DeliveryProblemInterface {
  readonly id: number;
  delivery_id: number;
  description: string;
  delivery?: Order;
  readonly created_at: Date;
  readonly updated_at: Date;
}

class DeliveryProblem extends ModelImplementation {
  readonly id!: number;

  delivery_id!: number;

  description!: string;

  delivery?: Order;

  readonly created_at!: Date;

  readonly updated_at!: Date;

  public static initialize(sequelize: Sequelize): void {
    this.init(
      {
        delivery_id: DataTypes.INTEGER,
        description: DataTypes.STRING,
      },
      { sequelize }
    );
  }

  public static associate(models: { [key: string]: ModelCtor<Model> }): void {
    this.belongsTo(models.Order, { foreignKey: 'delivery_id', as: 'delivery' });
  }
}

export default DeliveryProblem;
