import { Request, Response } from 'express';
import { Op, WhereOptions } from 'sequelize';

import Deliveryman from '@models/Deliveryman';
import File from '@models/File';

class DeliverymanController {
  async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const deliveryman = await Deliveryman.findByPk(id, {
      include: [{ model: File, as: 'avatar', attributes: ['path'] }],
    });

    if (!deliveryman)
      return res.status(400).json({ error: 'Deliveryman did not find' });

    return res.json(deliveryman);
  }

  async store(req: Request, res: Response): Promise<Response> {
    const { email } = req.body;

    const emailCheck = await Deliveryman.findOne({ where: { email } });

    if (emailCheck)
      return res.status(400).json({ error: 'Email already used' });

    const deliveryman = await Deliveryman.create(req.body);

    return res.status(201).json(deliveryman);
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const deliveryman = await Deliveryman.findByPk(id);

    if (!deliveryman)
      return res.status(404).json({ error: 'Deliveryman did not find' });

    await deliveryman.update(req.body);

    return res.json(deliveryman);
  }

  async index(req: Request, res: Response): Promise<Response> {
    const { q } = req.query;

    const where: WhereOptions = q ? { name: { [Op.iLike]: q } } : {};

    const deliverymen = await Deliveryman.findAll({
      where,
      include: [{ model: File, as: 'avatar' }],
      order: [['created_at', 'DESC']],
    });

    return res.json(deliverymen);
  }

  async delete(req: Request, res: Response): Promise<Response | void> {
    const { id } = req.params;
    const deliveryman = await Deliveryman.findByPk(id);

    if (!deliveryman)
      return res.status(404).json({ error: 'Deliveryman did not find' });

    await deliveryman.destroy();

    return res.status(204).end();
  }
}

export default new DeliverymanController();
