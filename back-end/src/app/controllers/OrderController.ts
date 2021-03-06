import { Request, Response } from 'express';
import { Op, WhereOptions } from 'sequelize';

import Order from '@models/Order';
import Queue from '@libs/Queue';
import Deliveryman from '@models/Deliveryman';
import Recipient from '@models/Recipient';
import File from '@models/File';

import CreateOrderMail from '@jobs/CreateOrderMail';

class OrderController {
  async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const order = await Order.findByPk(id, {
      include: [
        {
          model: Recipient,
          as: 'recipient',
        },
        {
          model: Deliveryman,
          as: 'deliveryman',
        },
        {
          model: File,
          as: 'signature',
          attributes: ['path'],
        },
      ],
    });

    if (!order) res.status(400).json({ error: 'order did not find' });

    return res.json(order);
  }

  async store(req: Request, res: Response): Promise<Response> {
    const { deliveryman_id, recipient_id } = req.body;

    const checkDeliveryman = await Deliveryman.findByPk(deliveryman_id);

    if (!checkDeliveryman)
      return res.status(400).json({ error: 'Deliveryman did not find' });

    const checkRecipient = await Recipient.findByPk(recipient_id);

    if (!checkRecipient)
      return res.status(400).json({ error: 'Recipient did not find' });

    const order = await Order.create(req.body);

    await order.reload({
      include: [
        {
          model: Recipient,
          as: 'recipient',
          attributes: ['name', 'street', 'number', 'city', 'state'],
        },
        {
          model: Deliveryman,
          as: 'deliveryman',
          attributes: ['name', 'email'],
        },
      ],
    });

    Queue.add(CreateOrderMail.key, { order });

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
    const { q } = req.query;

    const where: WhereOptions = q ? { product: { [Op.iLike]: q } } : {};

    const orders = await Order.findAll({
      where,
      include: [
        {
          model: Recipient,
          as: 'recipient',
          attributes: ['name', 'city', 'state'],
        },
        {
          model: Deliveryman,
          as: 'deliveryman',
          attributes: ['name'],
          include: [{ model: File, as: 'avatar', attributes: ['path'] }],
        },
      ],
      order: [['created_at', 'DESC']],
    });

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
