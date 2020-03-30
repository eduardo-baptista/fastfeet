import React from 'react';

// components
import Input from '~/components/Input';
import Form from '~/components/Form';
import { Logo, SigninButton } from './styles';

// assets
import logo from '~/assets/fastfeet-logo.png';

export default function SignIn() {
  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <>
      <Logo src={logo} alt="Fastfeet" />
      <Form onSubmit={handleSubmit}>
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
