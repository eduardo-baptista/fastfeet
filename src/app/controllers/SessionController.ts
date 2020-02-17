import { Request, Response } from 'express';

import User from '@models/User';

class SessionController {
  public async store(req: Request, res: Response): Promise<Response> {
    const users = await User.findAll();
    return res.json({ users });
  }
}

export default new SessionController();
