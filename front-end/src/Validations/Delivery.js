import * as Yup from 'yup';

export default Yup.object().shape({
  recipient_id: Yup.mixed().required('O Destinatário é obrigatório'),
  deliveryman_id: Yup.mixed().required('O Entregador é obrigatório'),
  product: Yup.string().required('O Nome do produto é obrigatório'),
});
