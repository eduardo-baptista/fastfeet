import { Request, Response } from 'express';

import DeliveryProblem from '@models/DeliveryProblem';
import Order from '@models/Order';
import Recipient from '@models/Recipient';
import Deliveryman from '@models/Deliveryman';

import CancelOrderMail from '@jobs/CancelOrderMail';
import Queue from '@libs/Queue';

class CancelDeliveryController {
  async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const problem = await DeliveryProblem.findByPk(id);
    if (!problem)
      return res.status(400).json({ Error: 'Problem did not find' });

    const order = await Order.findByPk(problem.delivery_id, {
      include: [
        { model: Recipient, as: 'recipient' },
        { model: Deliveryman, as: 'deliveryman' },
      ],
    });

    if (!order) return res.status(400).json({ Error: 'Delivery did not find' });
    if (order.canceled_at) {
      return res
        .status(400)
        .json({ Error: 'Delivery has already been canceled' });
    }

    const cancelationDate = new Date();

    await order.update({ canceled_at: cancelationDate });

    Queue.add(CancelOrderMail.key, { order });

    return res.status(200).json(order);
  }
}

export default new CancelDeliveryController();
