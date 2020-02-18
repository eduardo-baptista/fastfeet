import request from 'supertest';
import faker from 'faker';

import truncate from '@tests-utils/truncate';
import factories from '@tests-utils/factories';
import generateToken from '@tests-utils/generateToken';

import Recipient, { RecipientInterface } from '@models/Recipient';

import app from '../../app';

describe('Recipients', () => {
  let token: string;

  beforeEach(() => {
    const promise = new Promise(resolve =>
      generateToken().then(tk => {
        token = tk;
        resolve();
      })
    );

    return promise;
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

    expect(response.status).toBe(201);
    expect(recipientsCount).toBe(1);
  });

  it('should return error when values was not provided on create', async () => {
    const response = await request(app)
      .post('/recipients')
      .set('Authorization', token);

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('messages');
  });

  it('should be able to edit values from a criated recipient', async () => {
    const { id } = await factories.create<RecipientInterface>('Recipient');
    const recipientValuesToEdit = await factories.attrs<RecipientInterface>(
      'Recipient'
    );

    const response = await request(app)
      .put(`/recipients/${id}`)
      .set('Authorization', token)
      .send(recipientValuesToEdit);

    expect(response.body).toMatchObject(recipientValuesToEdit);
  });

  it('shoud return error when does not find recipient to edit', async () => {
    const id = faker.random.number();

    const recipientValuesToEdit = await factories.attrs<RecipientInterface>(
      'Recipient'
    );

    const response = await request(app)
      .put(`/recipients/${id}`)
      .set('Authorization', token)
      .send(recipientValuesToEdit);

    expect(response.status).toBe(404);
  });

  // it('should be able to list all recipients', async () => {
  //   const numOfRecipients = 5;
  //   await factories.createMany('Recipient', numOfRecipients);

  //   const response = await request(app)
  //     .get('/recipients')
  //     .set('Authorization', token);

  //   expect(response.body.length).toBe(numOfRecipients);
  // });
});
