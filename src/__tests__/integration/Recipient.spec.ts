import request from 'supertest';

import truncate from '@tests-utils/truncate';
import factories from '@tests-utils/factories';
import generateToken from '@tests-utils/generateToken';

import Recipient, { RecipientInterface } from '@models/Recipient';

import app from '../../app';

describe('Recipients', () => {
  let token: string;

  beforeEach(() => {
    return generateToken().then(tk => {
      token = tk;
    });
  });

  beforeEach(() => {
    return truncate();
  });

  it('should be able to create new recipients', async () => {
    const recipient = await factories.attrs<RecipientInterface>('Recipient');
    const response = await request(app)
      .post('/recipients')
      .set('Authorization', token)
      .send(recipient);

    const recipientsCount = await Recipient.count();

    expect(recipientsCount).toBe(1);
    expect(response.status).toBe(201);
  });

  it('sould return error when values was not provided on create', async () => {
    const response = await request(app)
      .post('/recipients')
      .set('Authorization', token);

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('messages');
  });
});
