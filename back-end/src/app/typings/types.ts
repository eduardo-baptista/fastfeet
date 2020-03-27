import { Model, Sequelize, ModelCtor } from 'sequelize';

export abstract class ModelImplementation extends Model {
  public static initialize?(sequelize: Sequelize): void;

  public static associate?(models: { [key: string]: ModelCtor<Model> }): void;
}

export interface JobInterface {
  key: string;
  handle({ data }: { data: unknown }): Promise<void>;
}
