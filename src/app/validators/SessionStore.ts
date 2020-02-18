import * as Yup from 'yup';

const schema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required(),
  password: Yup.string().required(),
});

export type SessionStore = Yup.InferType<typeof schema>;

export default schema;
