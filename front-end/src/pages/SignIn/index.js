import React, { useRef } from 'react';
import * as Yup from 'yup';

// components
import Input from '~/components/Input';
import Form from '~/components/Form';
import { Logo, SigninButton } from './styles';

// assets
import logo from '~/assets/fastfeet-logo.png';

// utils
import formatErrors from '~/utils/formatErrors';

export default function SignIn() {
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
    } catch (err) {
      const validationErrors = formatErrors(err);
      validationErrors && formRef.current.setErrors(validationErrors);
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
        <SigninButton type="submit">Entrar no sistema</SigninButton>
      </Form>
    </>
  );
}
