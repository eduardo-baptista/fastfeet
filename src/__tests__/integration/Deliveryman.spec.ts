import request from 'supertest';
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
});
