import Mail from '@libs/Mail';
import { JobInterface } from '@typings/types';

import { OrderInterface } from '@models/Order';

interface Data {
  order: OrderInterface;
}

class CreateOrderEmail implements JobInterface {
  get key(): string {
    return 'CreateOrderEmail';
  }

  async handle({ data }: { data: Data }): Promise<void> {
    const { order } = data;

    Mail.sendMail({
      to: `${order.deliveryman?.name} <${order.deliveryman?.email}>`,
      // colocar nome do produto no titulo
      subject: 'Novo produto disponivel para entrega!',
      template: 'createOrder',
      context: {
        deliverymanName: `${order.deliveryman?.name}`,
        product: order.product,
        recipientName: order.recipient?.name,
        address: `${order.recipient?.street}, ${order.recipient?.number} - ${order.recipient?.city}/${order.recipient?.state}`,
      },
    });
  }
}

export default new CreateOrderEmail();
