import * as Yup from 'yup';

const schema = Yup.object().shape({
  recipient_id: Yup.number(),
  deliveryman_id: Yup.number(),
  product: Yup.string(),
});

export type OrderUpdate = Yup.InferType<typeof schema>;

export default schema;
