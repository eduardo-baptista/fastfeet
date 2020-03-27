import { Request, Response } from 'express';

import Order from '@models/Order';

class EndDeliveryController {
  async store(req: Request, res: Response): Promise<Response> {
    const { delivery_id, signature_id } = req.body;
    const endDate = new Date();

    const order = await Order.findByPk(delivery_id);
    if (!order) return res.status(404).json({ error: 'Delivery did not find' });
    if (!order.start_date)
      return res.status(400).json({ error: 'this delivery has not started' });

    if (order.end_date)
      return res
        .status(400)
        .json({ error: 'this delivery has already been ended' });

    if (order.canceled_at)
      return res
        .status(400)
        .json({ error: 'this delivery has  been canceled' });

    await order.update({
      end_date: endDate,
      signature_id,
    });

    return res.json(order);
  }
}

export default new EndDeliveryController();
