import { Sequelize, Model, DataTypes } from 'sequelize';

export interface RecipientInterface {
  readonly id: number;
  name: string;
  street: string;
  number: number;
  complement: string;
  state: string;
  city: string;
  cep: string;
  readonly created_at: Date;
  readonly updated_at: Date;
}

class Recipient extends Model {
  public readonly id!: number;

  public name!: string;

  public street!: string;

  public number!: number;

  public complement!: string;

  public state!: string;

  public city!: string;

  public cep!: string;

  public readonly created_at!: Date;

  public readonly updated_at!: Date;

  public static initialize(sequelize: Sequelize): void {
    this.init(
      {
        name: DataTypes.STRING,
        street: DataTypes.STRING,
        number: DataTypes.INTEGER,
        complement: DataTypes.STRING,
        state: DataTypes.STRING,
        city: DataTypes.STRING,
        cep: DataTypes.STRING,
      },
      { sequelize }
    );
  }
}

export default Recipient;
