import { Sequelize, Model, DataTypes } from 'sequelize';

class User extends Model {
  public id!: number;

  public name!: string;

  public email!: string;

  public password!: string;

  public password_hash!: string;

  public readonly created_at!: Date;

  public readonly updated_at!: Date;

  public static initialize(sequelize: Sequelize): void {
    this.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.VIRTUAL,
        password_hash: DataTypes.STRING,
      },
      { sequelize }
    );
  }
}

export default User;
