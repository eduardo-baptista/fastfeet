import * as Yup from 'yup';

export default Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  street: Yup.string().required('A rua é obrigatória'),
  number: Yup.string().required('O número é obrigatório'),
  complement: Yup.string(),
  state: Yup.string().required('O estado é obrigatório'),
  city: Yup.string().required('Á cidade é obrigatória'),
  cep: Yup.string().required('O CEP é obrigatório'),
});
