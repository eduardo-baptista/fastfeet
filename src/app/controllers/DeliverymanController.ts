import { Request, Response } from 'express';

import Deliveryman from '@models/Deliveryman';

class DeliverymanController {
  async store(req: Request, res: Response): Promise<Response> {
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
    const deliverymen = await Deliveryman.findAll();

    return res.json(deliverymen);
  }
}

export default new DeliverymanController();
