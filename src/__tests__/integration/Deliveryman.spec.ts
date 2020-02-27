import request from 'supertest';
import faker from 'faker';
import factories from '@tests-utils/factories';
import generateToken from '@tests-utils/generateToken';
import truncate from '@tests-utils/truncate';

import Deliveryman, { DeliverymanInterface } from '@models/Deliveryman';

import app from '../../app';

describe('Deliveryman', () => {
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

  it('should be able to create a new deliveryman', async () => {
    const deliveryman = await factories.attrs<DeliverymanInterface>(
      'Deliveryman'
    );

    const response = await request(app)
      .post('/deliverymen')
      .set('Authorization', token)
      .send(deliveryman);

    const deliverymenCount = await Deliveryman.count();

    expect(response.status).toBe(201);
    expect(deliverymenCount).toBe(1);
  });

  it('should return error when values was not provided on create', async () => {
    const response = await request(app)
      .post('/deliverymen')
      .set('Authorization', token);

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('messages');
  });

  it('should be able edit values from a created deliveryman', async () => {
    const { id } = await factories.create<DeliverymanInterface>('Deliveryman');
    const valuesToEdit = await factories.attrs<DeliverymanInterface>(
      'Deliveryman'
    );

    const response = await request(app)
      .put(`/deliverymen/${id}`)
      .set('Authorization', token)
      .send(valuesToEdit);

    expect(response.body).toMatchObject(valuesToEdit);
  });

  it('should return error when does not find deliveryman to edit', async () => {
    const id = faker.random.number();

    const valuesToEdit = await factories.attrs<DeliverymanInterface>(
      'Deliveryman'
    );

    const response = await request(app)
      .put(`/deliverymen/${id}`)
      .set('Authorization', token)
      .send(valuesToEdit);

    expect(response.status).toBe(404);
  });

  it('should be able to list all deliverymen', async () => {
    const numberOfDeliverymen = 5;
    await factories.createMany('Deliveryman', numberOfDeliverymen);

    const response = await request(app)
      .get('/deliverymen')
      .set('Authorization', token);

    expect(response.body.length).toBe(numberOfDeliverymen);
  });

  it('should be able to delete a deliveryman', async () => {
    const { id } = await factories.create<DeliverymanInterface>('Deliveryman');

    const response = await request(app)
      .delete(`/deliverymen/${id}`)
      .set('Authorization', token);

    const numberOfDeliverymen = await Deliveryman.count();
    expect(response.status).toBe(204);
    expect(numberOfDeliverymen).toBe(0);
  });

  it('should return an error when does not find a deliveryman to delete', async () => {
    const id = faker.random.number();

    const response = await request(app)
      .delete(`/deliverymen/${id}`)
      .set('Authorization', token);

    expect(response.status).toBe(404);
  });
});
