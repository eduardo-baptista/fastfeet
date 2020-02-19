import { Sequelize, DataTypes } from 'sequelize';
import bcrypt from 'bcryptjs';

import { ModelImplementation } from '@typings/types';

export interface UserInterface {
  readonly id: number;
  name: string;
  email: string;
  password: string;
  password_hash: string;
  readonly created_at: Date;
  readonly updated_at: Date;
}

class User extends ModelImplementation {
  public readonly id!: number;

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

    this.addHook('beforeSave', async (user: User) => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });
  }

  public checkPassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default User;
