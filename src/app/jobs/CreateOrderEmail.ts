import Mail from '@libs/Mail';
import { JobInterface } from '@typings/types';

class CreateOrderEmail implements JobInterface {
  get key(): string {
    return 'CreateOrderEmail';
  }

  async handle({ data }): Promise<void> {
    Mail.sendMail({
      to: '',
      // colocar nome do produto no titulo
      subject: '',
      template: 'createOrder',
      context: {
        deliverymanName: '',
        product: '',
        recipientName: '',
        address: '',
      },
    });
  }
}

export default new CreateOrderEmail();
