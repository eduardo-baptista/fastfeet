import formatId from './formatId';
import formatData from './formatData';

const statusLevels = {
  pendente: 0,
  retirada: 1,
  entregue: 2,
};

export default function formatDeliveriesToList(deliveries) {
  return deliveries.map((delivery) => {
    delivery.formatedId = formatId(delivery.id);
    delivery.created_at = formatData(delivery.created_at);
    delivery.statusLevel = statusLevels[delivery.status];
    return delivery;
  });
}
