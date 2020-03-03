import * as Yup from 'yup';

const schema = Yup.object().shape({
  name: Yup.string(),
  street: Yup.string(),
  number: Yup.number(),
  complement: Yup.string(),
  state: Yup.string()
    .max(2)
    .min(2),
  city: Yup.string(),
  cep: Yup.string()
    .min(8)
    .max(8)
    .matches(/\d{8}/),
});

export type RecipientUpdate = Yup.InferType<typeof schema>;

export default schema;
