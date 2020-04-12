import { format, parseISO } from 'date-fns';
import formatId from './formatId';

const statusLevels = {
  pendente: 0,
  retirada: 1,
  entregue: 2,
};

export default function formatDeliveriesToList(deliveries) {
  return deliveries.map((delivery) => {
    delivery.formatedId = formatId(delivery.id);
    delivery.created_at = format(parseISO(delivery.created_at), 'dd/MM/yyyy');
    delivery.statusLevel = statusLevels[delivery.status];
    return delivery;
  });
}
