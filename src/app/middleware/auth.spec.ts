import jwt from 'jsonwebtoken';

import { Request, Response } from 'express';

import authConfig from '@config/auth';
import authMiddleware from './auth';

describe('Auth Middleware', () => {
  beforeAll(() => {
    jest.mock('@config/auth');
    authConfig.secret = 'test';
    authConfig.expiresIn = '7d';
  });

  it('should return error when no token was provided ', async () => {
    const nextFunction = jest.fn();

    const req = {
      headers: {},
    } as Request;

    const statusResMock = jest.fn(() => ({
      json: jest.fn(),
    }));

    const res = ({
      status: statusResMock,
    } as unknown) as Response;

    await authMiddleware(req, res, nextFunction);

    expect(nextFunction).not.toHaveBeenCalled();
    expect(statusResMock).toHaveBeenCalledWith(401);
  });

  it('should return error when invalid token was provided', async () => {
    const invalidToken = 'invalid token';
    const nextFunction = jest.fn();

    const req = {
      headers: {
        authorization: invalidToken,
      },
    } as Request;

    const statusResMock = jest.fn(() => ({
      json: jest.fn(),
    }));
    const res = ({
      status: statusResMock,
    } as unknown) as Response;

    await authMiddleware(req, res, nextFunction);

    expect(nextFunction).not.toHaveBeenCalled();
    expect(statusResMock).toHaveBeenCalledWith(401);
  });

  it('should exec next function when a valid token was provided', async () => {
    const token = jwt.sign({ id: 1 }, authConfig.secret, {
      expiresIn: authConfig.expiresIn,
    });
    const nextFunction = jest.fn();

    const req = {
      headers: {
        authorization: `Bearer ${token}`,
      },
    } as Request;

    const statusResMock = jest.fn(() => ({
      json: jest.fn(),
    }));
    const res = ({
      status: statusResMock,
    } as unknown) as Response;

    await authMiddleware(req, res, nextFunction);

    expect(nextFunction).toHaveBeenCalled();
  });
});
