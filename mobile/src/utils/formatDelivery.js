import formatData from './formatData';

export default function formatDelivery(delivery) {
  const formatedCep = delivery.recipient.cep.replace(/(\d{5})(\d{3})/, '$1-$2');
  delivery.address = `${delivery.recipient.street}, ${delivery.recipient.number}, ${delivery.recipient.city} - ${delivery.recipient.state}, ${formatedCep}`;
  delivery.status = delivery.status.replace(
    /(^[a-z])/,
    delivery.status[0].toUpperCase()
  );
  delivery.start_date = delivery.start_date
    ? formatData(delivery.start_date)
    : '-- / -- / --';
  delivery.end_date = delivery.end_date
    ? formatData(delivery.end_date)
    : '-- / -- / --';
  return delivery;
}
