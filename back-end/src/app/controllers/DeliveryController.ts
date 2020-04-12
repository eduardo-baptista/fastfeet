import { Request, Response } from 'express';
import { Op, WhereOptions } from 'sequelize';

import Order from '@models/Order';
import Recipient from '@models/Recipient';

class DeliveryController {
  async index(req: Request, res: Response): Promise<Response> {
    const { deliverymanid } = req.params;
    const { finished, page = 1 } = req.query;

    const filters: WhereOptions = finished
      ? {
          end_date: {
            [Op.ne]: null,
          },
        }
      : {
          end_date: null,
          canceled_at: null,
        };

    const orders = await Order.findAll({
      attributes: [
        'id',
        'status',
        'canceled_at',
        'end_date',
        'start_date',
        'created_at',
      ],
      where: {
        deliveryman_id: deliverymanid,
        ...filters,
      },
      include: [{ model: Recipient, as: 'recipient', attributes: ['city'] }],
      order: [['created_at', 'ASC']],
      limit: 5,
      offset: (page - 1) * 5,
    });

    return res.json(orders);
  }
}

export default new DeliveryController();
