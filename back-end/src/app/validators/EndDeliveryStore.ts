import * as Yup from 'yup';

const schema = Yup.object().shape({
  delivery_id: Yup.number().required(),
  signature_id: Yup.number().required(),
});

export type SessionStore = Yup.InferType<typeof schema>;

export default schema;
