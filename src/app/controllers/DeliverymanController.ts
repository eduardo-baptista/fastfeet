import { Request, Response } from 'express';

import Deliveryman from '@models/Deliveryman';

class DeliverymanController {
  async store(req: Request, res: Response): Promise<Response> {
    const deliveryman = await Deliveryman.create(req.body);

    return res.status(201).json(deliveryman);
  }
}

export default new DeliverymanController();
