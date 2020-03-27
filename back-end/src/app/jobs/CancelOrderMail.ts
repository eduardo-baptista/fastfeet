import Mail from '@libs/Mail';
import { JobInterface } from '@typings/types';

import { OrderInterface } from '@models/Order';

interface Data {
  order: OrderInterface;
}

class CancelOrderEmail implements JobInterface {
  get key(): string {
    return 'CancelOrderEmail';
  }

  async handle({ data }: { data: Data }): Promise<void> {
    const { order } = data;

    Mail.sendMail({
      to: `${order.deliveryman?.name} <${order.deliveryman?.email}>`,
      subject: 'Cancelamento de entrega!',
      template: 'cancelOrder',
      context: {
        deliverymanName: `${order.deliveryman?.name}`,
        product: order.product,
        recipientName: order.recipient?.name,
        address: `${order.recipient?.street}, ${order.recipient?.number} - ${order.recipient?.city}/${order.recipient?.state}`,
      },
    });
  }
}

export default new CancelOrderEmail();
