import React, { useRef } from 'react';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';

// components
import Input from '~/components/Input';
import Loader from '~/components/Loader';
import { Logo, SigninButton, Form } from './styles';

// assets
import logo from '~/assets/fastfeet-logo.png';

// actions
import { signInRequest } from '~/store/modules/auth/actions';

// utils
import formatErrors from '~/utils/formatErrors';

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector((store) => store.auth.loading);
  const formRef = useRef(null);

  async function handleSubmit(data) {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email('insira um e-mail valido')
          .required('O e-mail é obrigatório'),
        password: Yup.string().required('A senha é obrigatória'),
      });

      await schema.validate(data, { abortEarly: false });

      formRef.current.setErrors({});

      dispatch(signInRequest(data.email, data.password));
    } catch (err) {
      const validationErrors = formatErrors(err);
      if (validationErrors) formRef.current.setErrors(validationErrors);
    }
  }
  return (
    <>
      <Logo src={logo} alt="Fastfeet" />
      <Form onSubmit={handleSubmit} ref={formRef}>
        <Input
          label="SEU E-MAIL"
          name="email"
          placeholder="exemplo@email.com"
          type="email"
        />
        <Input
          label="SUA SENHA"
          name="password"
          placeholder="*************"
          type="password"
        />
        <SigninButton type="submit">
          {loading ? <Loader size="30" /> : 'Entrar no sistema'}
        </SigninButton>
      </Form>
    </>
  );
}
