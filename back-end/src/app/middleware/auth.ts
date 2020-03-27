import jwt from 'jsonwebtoken';
import { promisify } from 'util';

import { RequestHandler } from 'express';

import authConfig from '@config/auth';

interface DecodedJwt {
  id: string;
}

const auth: RequestHandler = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) return res.status(401).json({ error: 'Token not provided' });

  const [, token] = authHeader.split(' ');

  try {
    const decoded = (await promisify(jwt.verify)(
      token,
      authConfig.secret
    )) as DecodedJwt;

    req.userId = decoded.id;
    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Token invalid' });
  }
};

export default auth;
