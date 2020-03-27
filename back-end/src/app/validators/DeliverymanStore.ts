import * as Yup from 'yup';

const schema = Yup.object().shape({
  name: Yup.string().required(),
  avatar_id: Yup.number(),
  email: Yup.string()
    .email()
    .required(),
});

export type DeliverymanStore = Yup.InferType<typeof schema>;

export default schema;
