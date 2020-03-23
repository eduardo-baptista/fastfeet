import { Request, Response } from 'express';

import Order from '@models/Order';
import DeliveryProblem from '@models/DeliveryProblem';

class DeliveryProblemController {
  async index(req: Request, res: Response): Promise<Response> {
    const { deliveryid } = req.params;

    const checkOrder = await Order.findByPk(deliveryid);
    if (!checkOrder)
      return res.status(400).json({ Error: 'Delivery did not find.' });

    const problems = await DeliveryProblem.findAll({
      where: { delivery_id: deliveryid },
    });

    return res.json(problems);
  }

  async store(req: Request, res: Response): Promise<Response> {
    const { deliveryid } = req.params;

    const checkOrder = await Order.findByPk(deliveryid);
    if (!checkOrder)
      return res.status(400).json({ Error: 'Delivery did not find.' });

    const problem = await DeliveryProblem.create({
      delivery_id: deliveryid,
      ...req.body,
    });

    return res.json(problem);
  }
}

export default new DeliveryProblemController();
