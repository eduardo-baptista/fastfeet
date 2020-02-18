import { Request, Response } from 'express';

import Recipient from '@models/Recipient';

class RecipientController {
  async store(req: Request, res: Response): Promise<Response> {
    const recipient = await Recipient.create(req.body);

    return res.status(201).json(recipient);
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const recipient = await Recipient.findByPk(id);

    if (!recipient) return res.status(404).json({ error: 'User did not find' });

    await recipient.update(req.body);

    return res.json(recipient);
  }
}

export default new RecipientController();
