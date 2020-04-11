import React from 'react';
import { StatusBar, Image } from 'react-native';

import { Background, Input, Container, SubmitButton } from './styles';

import logo from '~/assets/logo.png';

export default function SignIn() {
  return (
    <>
      <StatusBar backgroundColor="#7D40E7" barStyle="light-content" />
      <Background>
        <Container>
          <Image source={logo} />
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Informe seru ID de cadastro"
            returnKeyType="send"
          />
          <SubmitButton>Entrar no sistema</SubmitButton>
        </Container>
      </Background>
    </>
  );
}
