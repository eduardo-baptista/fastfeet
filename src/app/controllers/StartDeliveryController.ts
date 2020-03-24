import { Request, Response } from 'express';
import { Op } from 'sequelize';
import { startOfDay, endOfDay } from 'date-fns';

import Order from '@models/Order';

class StartDeliveryController {
  async store(req: Request, res: Response): Promise<Response> {
    const { delivery_id } = req.body;
    const startDate = new Date();

    const order = await Order.findByPk(delivery_id);
    if (!order) return res.status(404).json({ error: 'Delivery did not find' });

    if (order.start_date)
      return res
        .status(400)
        .json({ error: 'this delivery has already started' });

    if (order.canceled_at)
      return res.status(400).json({ error: 'this delivery has been canceled' });

    const { deliveryman_id } = order;

    const deliverymanOrdersDay = await Order.findAll({
      where: {
        deliveryman_id,
        start_date: {
          [Op.between]: [startOfDay(startDate), endOfDay(startDate)],
        } as object,
      },
    });
    if (deliverymanOrdersDay.length >= 5)
      return res
        .status(400)
        .json({ error: 'You can only start 5 deliveries per day' });

    order.update({
      start_date: startDate,
    });

    return res.json(order);
  }
}

export default new StartDeliveryController();
