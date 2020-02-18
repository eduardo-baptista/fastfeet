import * as Yup from 'yup';

const schema = Yup.object().shape({
  name: Yup.string().required(),
  street: Yup.string().required(),
  number: Yup.number().required(),
  complement: Yup.string().required(),
  state: Yup.string().required(),
  city: Yup.string().required(),
  cep: Yup.string()
    .min(8)
    .max(8)
    .matches(/\d{8}/)
    .required(),
});

export type RecipientStore = Yup.InferType<typeof schema>;

export default schema;
