import request from 'supertest';
import fs from 'fs';
import path from 'path';
import truncate from '@tests-utils/truncate';
import generateToken from '@tests-utils/generateToken';

import app from '../../app';

describe('File Upload', () => {
  let token: string;
  const mockFilesPath = path.resolve(__dirname, '..', 'filesMock');

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

  afterAll(async () => {
    const files = fs.readdirSync(path.resolve(mockFilesPath, 'tmp'));

    files.forEach(file => {
      fs.unlinkSync(path.resolve(mockFilesPath, 'tmp', file));
    });
  });

  it('Should be able to upload files', async () => {
    const mockFile = path.resolve(mockFilesPath, 'teste.txt');

    const response = await request(app)
      .post('/files')
      .set('Authorization', token)
      .attach('file', mockFile);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
  });

  it('should return error when file was not provided', () => {
    const response = await request(app).post('');
  });
});
