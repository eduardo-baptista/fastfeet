import { Sequelize, Model, DataTypes } from 'sequelize';

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
