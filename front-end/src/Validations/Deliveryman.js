import * as Yup from 'yup';

export default Yup.object().shape({
  name: Yup.string().required('O Nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail valido')
    .required('O E-mail é obrigatório'),
  avatar_id: Yup.mixed(),
});
