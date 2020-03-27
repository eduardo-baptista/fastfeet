import * as Yup from 'yup';

const schema = Yup.object().shape({
  recipient_id: Yup.number().required(),
  deliveryman_id: Yup.number().required(),
  product: Yup.string().required(),
});

export type OrderStore = Yup.InferType<typeof schema>;

export default schema;
