import { Sequelize, DataTypes, Model, ModelCtor } from 'sequelize';

import { ModelImplementation } from '@typings/types';

import Recipient from '@models/Recipient';
import Deliveryman from '@models/Deliveryman';

export interface OrderInterface {
  readonly id: number;
  recipient_id: number;
  deliveryman_id: number;
  signature_id: number;
  product: string;
  canceled_at: Date;
  start_date: Date;
  end_date: Date;
  recipient?: Recipient;
  deliveryman?: Deliveryman;
  readonly created_at: Date;
  readonly updated_at: Date;
}

class Order extends ModelImplementation {
  readonly id!: number;

  recipient_id!: number;

  deliveryman_id!: number;

  signature_id!: number;

  product!: string;

  canceled_at!: Date;

  start_date!: Date;

  end_date!: Date;

  readonly recipient?: Recipient;

  readonly deliveryman?: Deliveryman;

  readonly created_at!: Date;

  readonly updated_at!: Date;

  public static initialize(sequelize: Sequelize): void {
    this.init(
      {
        recipient_id: DataTypes.INTEGER,
        deliveryman_id: DataTypes.INTEGER,
        signature_id: DataTypes.INTEGER,
        product: DataTypes.STRING,
        canceled_at: DataTypes.DATE,
        start_date: DataTypes.DATE,
        end_date: DataTypes.DATE,
      },
      { sequelize }
    );
  }

  public static associate(models: { [key: string]: ModelCtor<Model> }): void {
    this.belongsTo(models.Recipient, {
      foreignKey: 'recipient_id',
      as: 'recipient',
    });

    this.belongsTo(models.Deliveryman, {
      foreignKey: 'deliveryman_id',
      as: 'deliveryman',
    });

    this.belongsTo(models.File, {
      foreignKey: 'signature_id',
      as: 'signature',
    });
  }
}

export default Order;
