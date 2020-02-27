import request from 'supertest';
<<<<<<< HEAD
import faker from 'faker';
import factories from '@tests-utils/factories';
import generateToken from '@tests-utils/generateToken';
import truncate from '@tests-utils/truncate';

import Order, { OrderInterface } from '@models/Order';

import app from '../../app';

describe('Order', () => {
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

  it('should be able to create a new order', async () => {
    const order = await factories.attrs<OrderInterface>('Order');

    const response = await request(app)
      .post('/orders')
      .set('Authorization', token)
      .send(order);

    const orderCount = await Order.count();

    expect(response.status).toBe(201);
    expect(orderCount).toBe(1);
  });

  it('should return error when values was not provided on create', async () => {
    const response = await request(app)
      .post('/orders')
      .set('Authorization', token);

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('messages');
  });

  it('should be able to edit values from a created order', async () => {
    const { id } = await factories.create<OrderInterface>('Order');
    const valuesToEdit = await factories.attrs<OrderInterface>('Order');

    const response = await request(app)
      .put(`/orders/${id}`)
      .set('Authorization', token)
      .send(valuesToEdit);

    expect(response.body).toMatchObject(valuesToEdit);
  });

  it('should return error when does not find order to edit', async () => {
    const id = faker.random.number();
    const valuesToEdit = await factories.attrs<OrderInterface>('Order');

    const response = await request(app)
      .put(`/orders/${id}`)
      .set('Authorization', token)
      .send(valuesToEdit);

    expect(response.status).toBe(404);
  });

  it('should be able to list all orders', async () => {
    const numberOfOrders = 5;
    await factories.createMany('Order', numberOfOrders);

    const response = await request(app)
      .get('/orders')
      .set('Authorization', token);

    expect(response.body.length).toBe(numberOfOrders);
  });

  it('should be able to delete a order', async () => {
    const { id } = await factories.create<OrderInterface>('Order');

    const response = await request(app)
      .delete(`/orders/${id}`)
      .set('Authorization', token);

    const numberOfOrders = await Order.count();
    expect(response.status).toBe(204);
    expect(numberOfOrders).toBe(0);
  });

  it('should return an error when does not find a order to delete', async () => {
    const id = faker.random.number();

    const response = await request(app)
      .delete(`/orders/${id}`)
      .set('Authorization', token);

    expect(response.status).toBe(404);
  });
});
=======

import truncate from '@tests-utils/truncate';
>>>>>>> 625b208aef17b4525c81179131273a1af785edbf
