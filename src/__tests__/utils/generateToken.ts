import request from 'supertest';

import factories from '@tests-utils/factories';
import { UserInterface } from '@models/User';

import app from '../../app';

export default async function(): Promise<string> {
  const user = await factories.create<UserInterface>('User');

  const { email, password } = user;

  const response = await request(app)
    .post('/sessions')
    .send({ email, password });

  return `Bearer ${response.body.token}`;
}
