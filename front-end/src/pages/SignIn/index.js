import React from 'react';

// components
import Input from '~/components/Input';
import { Logo, SigninButton } from './styles';

// assets
import logo from '~/assets/fastfeet-logo.png';

export default function SignIn() {
  return (
    <>
      <Logo src={logo} alt="Fastfeet" />
      <Input label="SEU E-MAIL" placeholder="exemplo@email.com" type="email" />
      <Input label="SUA SENHA" placeholder="*************" type="password" />
      <SigninButton type="submit">Entrar no sistema</SigninButton>
    </>
  );
}
