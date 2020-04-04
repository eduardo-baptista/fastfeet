import { Request, Response } from 'express';
import { Op, WhereOptions } from 'sequelize';

import Order from '@models/Order';

class DeliveryController {
  async index(req: Request, res: Response): Promise<Response> {
    const { deliverymanid } = req.params;
    const { finished } = req.query;

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
      where: {
        deliveryman_id: deliverymanid,
        ...filters,
      },
      order: [['created_at', 'DESC']],
    });

    return res.json(orders);
  }
}

export default new DeliveryController();
