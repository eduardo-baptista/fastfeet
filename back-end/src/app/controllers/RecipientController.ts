import { Request, Response } from 'express';
import { Op, WhereOptions } from 'sequelize';

import Recipient from '@models/Recipient';

class RecipientController {
  async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const recipient = await Recipient.findByPk(id);

    if (!recipient)
      return res.status(400).json({ error: 'Recipient did not find' });

    return res.json(recipient);
  }

  async store(req: Request, res: Response): Promise<Response> {
    const recipient = await Recipient.create(req.body);

    return res.status(201).json(recipient);
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const recipient = await Recipient.findByPk(id);

    if (!recipient)
      return res.status(404).json({ error: 'Recipient did not find' });

    await recipient.update(req.body);

    return res.json(recipient);
  }

  async index(req: Request, res: Response): Promise<Response> {
    const { q } = req.query;

    const where: WhereOptions = q ? { name: { [Op.iLike]: q } } : {};

    const recipients = await Recipient.findAll({
      where,
      order: [['created_at', 'DESC']],
    });

    return res.json(recipients);
  }

  async delete(req: Request, res: Response): Promise<Response | void> {
    const { id } = req.params;

    const recipient = await Recipient.findByPk(id);

    if (!recipient)
      return res.status(404).json({ error: 'Recipient did not find' });

    await recipient.destroy();

    return res.status(204).end();
  }
}

export default new RecipientController();
