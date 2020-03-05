import { Request, Response } from 'express';

import Order from '@models/Order';
import Deliveryman from '@models/Deliveryman';
import Recipient from '@models/Recipient';

class OrderController {
  async store(req: Request, res: Response): Promise<Response> {
    const order = await Order.create(req.body);

    await order.reload({
      include: [
        { model: Recipient, as: 'recipient' },
        { model: Deliveryman, as: 'deliveryman' },
      ],
    });

    return res.status(201).json(order);
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const order = await Order.findByPk(id);

    if (!order) return res.status(404).json({ error: 'Order did not find' });

    await order.update(req.body);

    return res.json(order);
  }

  async index(req: Request, res: Response): Promise<Response> {
    const orders = await Order.findAll();

    return res.json(orders);
  }

  async delete(req: Request, res: Response): Promise<Response | void> {
    const { id } = req.params;

    const order = await Order.findByPk(id);

    if (!order) return res.status(404).json({ error: 'Order did not find' });

    await order.destroy();

    return res.status(204).end();
  }
}

export default new OrderController();
