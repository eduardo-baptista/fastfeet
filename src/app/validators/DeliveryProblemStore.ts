import * as Yup from 'yup';

const schema = Yup.object().shape({
  description: Yup.string().required(),
});

export type DeliveryProblemStore = Yup.InferType<typeof schema>;

export default schema;
