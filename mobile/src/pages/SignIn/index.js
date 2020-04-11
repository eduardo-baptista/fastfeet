import React, { useState } from 'react';
import { StatusBar, Image, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Background, Input, Container, SubmitButton } from './styles';

import logo from '~/assets/logo.png';

import { signInRequest } from '~/store/modules/auth/action';

export default function SignIn() {
  const dispatch = useDispatch();
  const [id, setId] = useState(null);

  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit() {
    if (!id) {
      Alert.alert('ID Invalido', 'O ID é obrigatório');
      return;
    }
    dispatch(signInRequest(id));
  }

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
            onSubmitEditing={handleSubmit}
            value={id}
            onChangeText={setId}
          />
          <SubmitButton loading={loading} onPress={handleSubmit}>
            Entrar no sistema
          </SubmitButton>
        </Container>
      </Background>
    </>
  );
}
