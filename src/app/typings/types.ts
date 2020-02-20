import { Model, Sequelize, ModelCtor } from 'sequelize';

// eslint-disable-next-line import/prefer-default-export
export abstract class ModelImplementation extends Model {
  public static initialize?(sequelize: Sequelize): void;

  public static associate?(models: { [key: string]: ModelCtor<Model> }): void;
}
