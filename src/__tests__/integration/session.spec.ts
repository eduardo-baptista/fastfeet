import request from 'supertest';
import jwt from 'jsonwebtoken';

import truncate from '@tests-utils/truncate';
import factories from '@tests-utils/factories';

import User from '@models/User';

import app from '../../app';

describe('Session', () => {
  beforeEach(() => {
    return truncate();
  });

  it('should be able to login with email and password', async () => {
    const user = await factories.create<User>('User');

    const { email, password } = user;

    const response = await request(app)
      .post('/sessions')
      .send({
        email,
        password,
      });

    expect(response.status).toBe(200);
  });

  it('should return error when does not find a user', async () => {
    const user = await factories.attrs<User>('User');

    const { email, password } = user;

    const response = await request(app)
      .post('/sessions')
      .send({ email, password });

    expect(response.status).toBe(401);
  });

  it('should return error when password does not match ', async () => {
    const user = await factories.create<User>('User');

    const { email, password } = user;

    const response = await request(app)
      .post('/sessions')
      .send({
        email,
        // revert string, e.g: "hello" = "olleh"
        password: password
          .split('')
          .reverse()
          .join(''),
      });

    expect(response.status).toBe(401);
  });

  it('should return a valid token on login', async () => {
    const user = await factories.create<User>('User');

    const { email, password } = user;

    const response = await request(app)
      .post('/sessions')
      .send({ email, password });

    const { token } = response.body;

    const verifiedToken = jwt.verify(token, process.env.APP_SECRET);

    expect(verifiedToken).toHaveProperty('id');
  });

  it('should return error when values was not provided', async () => {
    const response = await request(app).post('/sessions');

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('messages');
  });
});
