import { Request, Response } from 'express';

import Problem from '@models/DeliveryProblem';
import Order from '@models/Order';

class ProblemController {
  async index(req: Request, res: Response): Promise<Response> {
    const problems = await Problem.findAll({
      order: [['created_at', 'DESC']],
      include: [
        {
          model: Order,
          as: 'delivery',
          attributes: ['status', 'canceled_at', 'end_date', 'start_date'],
        },
      ],
    });

    return res.json(problems);
  }
}

export default new ProblemController();
