import * as Yup from 'yup';

const schema = Yup.object().shape({
  name: Yup.string(),
  avatar_id: Yup.number(),
  email: Yup.string().email(),
});

export type DeliverymanUpdate = Yup.InferType<typeof schema>;

export default schema;
