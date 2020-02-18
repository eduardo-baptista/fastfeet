import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';

import User from '@models/User';

import auhtConfig from '@config/auth';

import { SessionStore } from '@validators/SessionStore';

class SessionController {
  public async store(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body as SessionStore;

    const user = await User.findOne({ where: { email } });

    if (!user) return res.status(401).json({ error: 'User did not find' });

    const isPasswordValid = await user.checkPassword(password);

    if (!isPasswordValid)
      return res.status(401).json({ error: 'Password is not correct' });

    const { id, name } = user;

    const token = jwt.sign({ id }, auhtConfig.secret, {
      expiresIn: auhtConfig.expiresIn,
    });

    return res.json({
      user: { id, name, email },
      token,
    });
  }
}

export default new SessionController();
