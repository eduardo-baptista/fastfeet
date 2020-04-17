import { format, parseISO } from 'date-fns';

export default function formatData(data) {
  return format(parseISO(data), 'dd/MM/yyyy');
}
